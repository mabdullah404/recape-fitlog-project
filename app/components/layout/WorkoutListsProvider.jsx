"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const WorkoutListsContext = createContext(null);

const readList = (key) => {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
};

const subscribe = (onChange) => {
  window.addEventListener("storage", onChange);
  window.addEventListener("fitlog-lists-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("fitlog-lists-change", onChange);
  };
};

const getSnapshot = () => JSON.stringify([
  window.localStorage.getItem(PLAN_KEY),
  window.localStorage.getItem(SAVED_KEY),
]);

const getServerSnapshot = () => "[null,null]";

const writeList = (key, items) => {
  window.localStorage.setItem(key, JSON.stringify(items));
  window.dispatchEvent(new Event("fitlog-lists-change"));
};

export function WorkoutListsProvider({ children }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [planSnapshot, savedSnapshot] = JSON.parse(snapshot);
  const plan = readSnapshotList(planSnapshot);
  const saved = readSnapshotList(savedSnapshot);

  const addToPlan = (workout) => {
    const current = readList(PLAN_KEY);
    if (!current.some((item) => item.id === workout.id)) {
      writeList(PLAN_KEY, [...current, workout]);
    }
  };

  const saveWorkout = (workout) => {
    const current = readList(SAVED_KEY);
    if (!current.some((item) => item.id === workout.id)) {
      writeList(SAVED_KEY, [...current, workout]);
    }
  };

  const removeFromPlan = (id) => {
    writeList(PLAN_KEY, readList(PLAN_KEY).filter((item) => item.id !== id));
  };

  const removeFromSaved = (id) => {
    writeList(SAVED_KEY, readList(SAVED_KEY).filter((item) => item.id !== id));
  };

  return (
    <WorkoutListsContext.Provider
      value={{ plan, saved, addToPlan, saveWorkout, removeFromPlan, removeFromSaved }}
    >
      {children}
    </WorkoutListsContext.Provider>
  );
}

export function useWorkoutLists() {
  const context = useContext(WorkoutListsContext);
  if (!context) {
    throw new Error("useWorkoutLists must be used inside WorkoutListsProvider");
  }
  return context;
}

function readSnapshotList(value) {
  try {
    const items = JSON.parse(value || "[]");
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}