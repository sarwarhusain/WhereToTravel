import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex flex-col items-center justify-between gap-6 min-h-[80vh]">

      {/* HERO TEXT */}
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl text-white/90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-2">
          <button className="uppercase bg-cyan-500 px-5 py-3 text-sm sm:text-base cursor-pointer hover:bg-cyan-600 transition">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/30 backdrop-blur text-sm sm:text-base cursor-pointer hover:bg-white/40 transition">
            View Destination
          </button>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="w-full bg-white/30 backdrop-blur px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 max-w-6xl mx-auto">

          {/* Location */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs sm:text-sm">Location</h3>
            <p className="text-xs sm:text-sm">Address, City or Zip</p>
          </div>

          <div className="hidden sm:block">
            <Separator orientation="vertical" />
          </div>

          {/* Date */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs sm:text-sm">Date/Duration</h3>
            <p className="text-xs sm:text-sm">Anytime / 3 Days</p>
          </div>

          <div className="hidden sm:block">
            <Separator orientation="vertical" />
          </div>

          {/* Budget */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs sm:text-sm">Budget</h3>
            <p className="text-xs sm:text-sm">$0 - $3000</p>
          </div>

          <div className="hidden sm:block">
            <Separator orientation="vertical" />
          </div>

          {/* People */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs sm:text-sm">People</h3>
            <p className="text-xs sm:text-sm">5 - 10</p>
          </div>

          {/* Search Button */}
          <button className="bg-cyan-500 px-6 py-2 sm:py-3 text-sm font-medium hover:bg-cyan-600 transition w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;