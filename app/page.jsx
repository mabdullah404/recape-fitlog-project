import React, { cache } from "react";
import Hero from "./components/home/Hero";
import WorkoutCard from "./components/home/WorkoutCard";

const page = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts = await res.json();

  return (
    <main>
      <div>
        <Hero> </Hero>

        <div className="border mb-12 rounded-2xl mx-auto  max-w-7xl  py-4 sm:px-8">

          <div className="mb-6">
            <p className="mb-2 text-xs font-bold tracking-[0.25em] text-zinc-400">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-2xl font-black text-white">THE LIBRARY</h1>
          </div>

          <div className="mx-auto mt-12 max-w-7xl  grid grid-cols-3 gap-8    ">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
