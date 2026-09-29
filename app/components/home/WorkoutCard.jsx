import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link href={`/workout/${id}`}>
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#171717]">
        {/* Image */}
        <div className="relative h-45 w-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Muscle Groups */}
          <div className="mb-2 flex flex-wrap gap-1.5">
            {muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-lime-400 px-2.5 py-0.5 text-[10px] font-bold text-black"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="text-sm font-bold uppercase text-white">{name}</h2>

          {/* Equipment */}
          <p className="mt-2 text-xs text-zinc-400">{equipment}</p>

          {/* Bottom Info */}
          <div className="mt-3 flex items-center gap-3 text-xs text-zinc-400">
            <span>⏱ {duration} min</span>

            <span>🔥 {caloriesBurned} kcal</span>

            <span>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
