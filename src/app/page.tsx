import Sidebar from "@/components/Sidebar";
import Timeline from "@/components/Timeline";
import React from "react";
import { BsSearch } from "react-icons/bs";

// import { HiEnvelope } from "react-icons/hi2";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="xl:max-w-[50vw] w-full h-full flex relative">
        <Sidebar />
        <Timeline />
        <section className="sticky top-2 mt-2 w-full flex flex-col items-strech h-screen px-6">
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
                  <div className="font-bold text-lg">#Trending ${i + 1}</div>
                  <div className="text-xs text-gray-400">35.2k</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
