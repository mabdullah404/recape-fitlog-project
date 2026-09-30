"use client";

import { useWorkoutLists } from "../layout/WorkoutListsProvider";

export default function WorkoutActions({ workout }) {
  const { plan, saved, addToPlan, saveWorkout } = useWorkoutLists();
  const isPlanned = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={isPlanned}
        className="flex-1 rounded-full bg-lime-400 py-3 font-semibold text-black transition-colors hover:bg-lime-300 disabled:cursor-default disabled:bg-lime-400/60"
      >
        {isPlanned ? "Added to today's plan" : "+ Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        disabled={isSaved}
        className="flex-1 rounded-full border border-zinc-700 py-3 font-semibold text-white transition-colors hover:border-lime-400 hover:text-lime-400 disabled:cursor-default disabled:border-lime-400 disabled:text-lime-400"
      >
        {isSaved ? "Saved for later" : "🔖 Save for later"}
      </button>
    </div>
  );
}