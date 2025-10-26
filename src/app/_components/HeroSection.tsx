import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

export const HeroSection = () => {
  return (
    <div className="relative pt-10 px-10 flex flex-col items-center">
      <div className="absolute content-[''] w-full h-1/2 md:h-4/5 lg:h-full bottom-0 md:-bottom-10 lg:top-40 bg-radial from-white via-indigo-800 via-70% md:via-60% lg:via-50% to-background to-90% blur-xl -z-50 opacity-80" />

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-3xl mx-auto">
        Powerful Landing Pages That Convert
      </h1>

      <p className="mt-6 text-lg text-center px-4 font-alt max-w-2xl mx-auto font-thin">
        Launch high-converting landing pages faster, generate qualified leads,
        and optimize your marketing efforts—all with one simple solution.
      </p>

      <button
        className="mt-8 px-4 py-3 bg-lime-300 hover:bg-lime-400 text-background rounded-xl text-md font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 w-full font-alt flex items-center gap-2 justify-center max-w-sm"
        type="button"
      >
        Start my trial
        <FaArrowRight />
      </button>

      <div className="mt-10 max-w-xl lg:max-w-4xl">
        <Image
          src="/assets/hero.jpg"
          alt="Hero Image"
          width={1200}
          height={800}
          className="rounded-t-lg shadow-2xl shadow-indigo-50/60"
          unoptimized
        />
      </div>
    </div>
  );
};
