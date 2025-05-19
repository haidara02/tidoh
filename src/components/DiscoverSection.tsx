import React from "react";
import { BsSearch } from "react-icons/bs";

const DiscoverSection = () => {
  return (
    <section className="sticky top-2 overflow-y-scroll scrollbar-hidden mt-2 w-full flex flex-col items-strech h-screen px-6">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            className="peer w-full h-full pl-14 pr-4 py-4 rounded-xl bg-neutral-900 outline-none placeholder:text-gray-400 focus:border focus:border-gray-700"
            placeholder="Search Tydal"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-blue-600"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3 className="text-xl font-bold text-white my-2 px-4">
          What's happening
        </h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 transition duration-200 p-4 last:rounded-b-xl"
            >
              <div className="font-bold text-lg">#Trending {i + 1}</div>
              <div className="text-xs text-gray-400">35.2k</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3 className="text-xl font-bold text-white my-2 px-4">
          Who to follow
        </h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 transition duration-200 p-4 justify-between last:rounded-b-xl flex items-center"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
                <div className="flex flex-col">
                  <div className="font-bold">Example User</div>
                  <div className="text-gray-500 text-xs">@example{i}</div>
                </div>
              </div>
              <div>
                <button className="rounded-full px-6 py-2 bg-white text-black">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
