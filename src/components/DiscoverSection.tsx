import React from "react";
import { BsSearch } from "react-icons/bs";
import { Button } from "./ui/button";

const DiscoverSection = () => {
  return (
    <section className="sticky top-2 hidden overflow-y-scroll scrollbar-hidden mt-2 lg:flex w-full max-w-[400px] flex-col items-stretch h-screen px-6">
      <div className="w-full">
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
        <h3 className="text-xl font-bold my-2 px-4">What&apos;s happening</h3>
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
      <div className="flex flex-col rounded-xl bg-secondary my-4 text-foreground">
        <h3 className="text-xl font-bold my-2 px-4">Who to follow</h3>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="hover:bg-foreground/10 w-full transition duration-200 p-4 justify-between gap-2 last:rounded-b-xl flex items-center"
          >
            <div className="flex items-center w-full gap-3">
              <div className="rounded-full bg-slate-400 w-10 h-10 flex-shrink-0" />
              <div className="flex flex-col min-w-0 flex-1">
                <div className="font-bold truncate">
                  {i} Example User LOOOOOOOOOOOOOONG
                </div>
                <div className="text-muted-foreground text-xs truncate">
                  @example{i}looooooooooooooooooong
                </div>
              </div>
              <Button className="rounded-full px-4 py-2 font-bold cursor-pointer flex-shrink-0 whitespace-nowrap">
                Follow
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;
