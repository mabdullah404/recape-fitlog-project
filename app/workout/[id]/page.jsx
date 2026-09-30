import Image from "next/image";
import WorkoutActions from "../../components/workout/WorkoutActions";

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  // URL এর id দিয়ে API থেকে সব workout আনা
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  const workouts = await res.json();

  // যে workout এর id URL এ আছে সেটা খুঁজে বের করা
  const workout = workouts.find((item) => item.id === Number(id));

  // ভুল id হলে
  if (!workout) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-white">Workout not found</h1>
        <p className="mt-2 text-sm text-zinc-400">
          এই ওয়ার্কআউটটি খুঁজে পাওয়া যায়নি।
        </p>
      </main>
    );
  }

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    description,
    instructions,
  } = workout;

  return (
    <main className="min-h-screen bg-black py-10">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 lg:grid-cols-2">

        {/* ================= IMAGE ================= */}
        <div className="relative h-[450px] overflow-hidden rounded-2xl border border-zinc-800 sm:h-[450px] lg:h-[600px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* ================= DETAILS ================= */}
        <div className="text-white">

          {/* Name */}
          <h1 className="text-3xl font-bold uppercase leading-tight sm:text-4xl">
            {name}
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-zinc-400">
            {description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
              >
                {muscle.toUpperCase()}
              </span>
            ))}
          </div>

          {/* ================= INFO ================= */}
          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-[#141414]">

            <div className="flex justify-between border-b border-zinc-800 px-4 py-3 text-sm">
              <span className="text-zinc-500">Equipment</span>
              <span className="font-medium">{equipment}</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 px-4 py-3 text-sm">
              <span className="text-zinc-500">Difficulty</span>
              <span className="font-medium">{difficulty}</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 px-4 py-3 text-sm">
              <span className="text-zinc-500">Sets</span>
              <span className="font-medium">{sets}</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 px-4 py-3 text-sm">
              <span className="text-zinc-500">Reps</span>
              <span className="font-medium">{reps}</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 px-4 py-3 text-sm">
              <span className="text-zinc-500">Duration</span>
              <span className="font-medium">{duration} min</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 px-4 py-3 text-sm">
              <span className="text-zinc-500">Calories</span>
              <span className="font-medium">{caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-zinc-500">Rating</span>
              <span className="font-medium">⭐ {rating}</span>
            </div>

          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <h2 className="mt-7 text-lg font-bold uppercase tracking-wide">
            Instructions
          </h2>

          <div className="mt-4 space-y-4">
            {instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                  {index + 1}
                </span>

                <p className="text-sm leading-6 text-zinc-300">
                  {instruction}
                </p>
              </div>
            ))}
          </div>

          {/* ================= BUTTONS ================= */}
          <WorkoutActions workout={workout} />

        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;