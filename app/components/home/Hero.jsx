import Image from "next/image";
import Banner from "@/public/assets/banner.png";

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 mb-12">
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-8 rounded-2xl bg-[#222630] p-6 md:flex-row md:justify-between md:p-10">
        {/* Left: text */}
        <div className="">
          <p className="font-bold text-[#C2F800]">WORKOUT LIBRARY</p>

          <h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-4 text-neutral-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-12 ">
            <a
              href="#library"
              className="btn mt-6 border-none bg-[#C2F800] text-black hover:bg-[#d4ff33] p-4 rounded-2xl"
            >
              BROWSE WORKOUTS
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full max-w-sm md:max-w-md">
          <Image
            src={Banner}
            alt="Fitness banner"
            className="h-auto w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
