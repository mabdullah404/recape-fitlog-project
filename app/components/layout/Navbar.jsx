"use client";

import Link from "next/link";
import { useWorkoutLists } from "./WorkoutListsProvider";

export default function Navbar() {
  const { plan, saved } = useWorkoutLists();

  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* বামে: লোগো */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">💪</span>
          <span className="font-bold tracking-wide text-white">FITLOG</span>
        </Link>

        {/* মাঝে: নেভিগেশন লিংক */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-lime-400">
            Workout
          </Link>
          <Link href="/my-plan#plan" className="text-sm text-neutral-400">
            My Plan
          </Link>
        </div>

        {/* ডানে: ব্যাজ */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan#plan"
            className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-neutral-950"
          >
            Plan {plan.length}
          </Link>
          <Link
            href="/my-plan#saved"
            className="rounded-full border border-neutral-600 px-3 py-1 text-xs font-semibold text-neutral-200"
          >
            Saved {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}