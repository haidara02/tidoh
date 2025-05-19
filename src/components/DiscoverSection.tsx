import React from "react";
import { BsSearch } from "react-icons/bs";
import { Button } from "./ui/button";

const DiscoverSection = () => {
  return (
    <section className="sticky top-2 overflow-y-scroll scrollbar-hidden mt-2 w-full flex flex-col items-strech h-screen px-6">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            className="peer w-full h-full pl-14 pr-4 py-4 rounded-xl bg-secondary outline-none placeholder:text-muted-foreground focus:border focus:border-accent"
            placeholder="Search Tydal"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-accent"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-secondary my-4 text-foreground">
        <h3 className="text-xl font-bold my-2 px-4">What's happening</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-foreground/10 transition duration-200 p-4 last:rounded-b-xl"
            >
              <div className="font-bold text-lg">#Trending {i + 1}</div>
              <div className="text-xs text-muted-foreground">35.2k</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-secondary my-4 text-foreground">
        <h3 className="text-xl font-bold my-2 px-4">Who to follow</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-foreground/10 transition duration-200 p-4 justify-between last:rounded-b-xl flex items-center"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-slate-400 w-10 h-10"></div>
                <div className="flex flex-col">
                  <div className="font-bold">Example User</div>
                  <div className="text-muted-foreground text-xs">
                    @example{i}
                  </div>
                </div>
              </div>
              <div>
                <Button className="rounded-full px-6 py-2 font-bold cursor-pointer">
                  Follow
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
