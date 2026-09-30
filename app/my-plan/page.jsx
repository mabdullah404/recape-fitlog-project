"use client";

import Image from "next/image";
import Link from "next/link";
import { useWorkoutLists } from "../components/layout/WorkoutListsProvider";

function WorkoutList({ title, items, onRemove, emptyMessage, sectionId }) {
  return (
    <section id={sectionId} className="scroll-mt-8">
      <div className="mb-4 flex items-baseline justify-between border-b border-zinc-800 pb-3">
        <h2 className="text-xl font-bold uppercase">{title}</h2>
        <span className="text-sm text-zinc-400">{items.length} items</span>
      </div>

      {items.length === 0 ? (
        <p className="py-6 text-sm text-zinc-500">{emptyMessage}</p>
      ) : (
        <ul className="divide-y divide-zinc-800">
          {items.map((workout) => (
            <li key={workout.id} className="flex items-center gap-4 py-4">
              <Link
                href={`/workout/${workout.id}`}
                className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md bg-zinc-900"
              >
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                  unoptimized
                />
              </Link>
              <div className="min-w-0 flex-1">
                <Link
                  href={`/workout/${workout.id}`}
                  className="font-semibold text-white hover:text-lime-400"
                >
                  {workout.name}
                </Link>
                <p className="mt-1 text-sm text-zinc-400">
                  {workout.equipment} · {workout.duration} min
                </p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(workout.id)}
                aria-label={`Remove ${workout.name} from ${title}`}
                className="shrink-0 px-2 py-2 text-sm text-zinc-400 hover:text-red-400"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved } = useWorkoutLists();

  return (
    <main className="min-h-[70vh] bg-black px-5 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold tracking-[0.2em] text-lime-400">FITLOG</p>
        <h1 className="mt-2 text-3xl font-bold uppercase">My Plan</h1>
        <div className="mt-8 space-y-12">
          <WorkoutList
            sectionId="plan"
            title="Today's Plan"
            items={plan}
            onRemove={removeFromPlan}
            emptyMessage="Your plan is empty. Add a workout to get started."
          />
          <WorkoutList
            sectionId="saved"
            title="Saved for Later"
            items={saved}
            onRemove={removeFromSaved}
            emptyMessage="No saved workouts yet."
          />
        </div>
      </div>
    </main>
  );
}