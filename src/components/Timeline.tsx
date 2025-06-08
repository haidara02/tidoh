"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";
import { fetchWaves } from "@/app/api/actions";
import ComposeWave from "./ComposeWave";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface Wave {
  id: string | number;
  text: string;
  created_at: string;
  profiles: {
    full_name?: string;
    username?: string;
  };
  // Add other fields as needed
}

const Timeline = () => {
  const [timeline, setTimeline] = useState<Wave[]>([]);
  const loadTimeline = useCallback(async () => {
    try {
      const { data, error } = await fetchWaves();
      if (data.length === 0) {
        alert("No waves found!");
      }

      if (error) {
        alert("Error loading user data!");
      }

      setTimeline(data);
    } catch {
      alert("Error loading user data!");
    }
  }, []);

  useEffect(() => {
    loadTimeline();
  }, [loadTimeline]);
  return (
    <main className="flex w-full lg:min-w-[600px] max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-500">
      <h1 className="p-6 backdrop-blur sticky top-0 z-10 text-xl font-bold text-foreground">
        Feed
      </h1>
      <div className="flex items-stretch p-4 space-x-2 border-t-[0.5px] border-b-[0.5px] border-gray-500 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <ComposeWave />
      </div>
      <div className="flex flex-col items-stretch w-full h-full">
        {timeline.length === 0 && (
          <div className="flex items-center justify-center w-full h-full p-10">
            <p className="text-lg text-secondary-foreground">
              No waves found. Please try again later.
            </p>
          </div>
        )}
        {timeline.length > 0 &&
          timeline.map((wave) => (
            <div
              key={wave.id}
              className="flex items-stretch p-4 w-full gap-2 border-b-[0.5px] border-gray-500 relative"
            >
              <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
              <div className="flex flex-col w-[90%] h-full">
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center gap-2 w-full">
                    <h1 className="text-lg font-bold text-foreground">
                      {wave.profiles.full_name ?? "Anonymous User"}
                    </h1>
                    <p className="text-sm text-secondary-foreground">
                      @{wave.profiles.username ?? "anonymous"}
                    </p>
                    <div>
                      <BsDot className="text-secondary-foreground" />
                    </div>
                    <p className="text-sm text-secondary-foreground">
                      {dayjs(wave.created_at).fromNow()}
                    </p>
                  </div>
                  <div>
                    <BsThreeDots />
                  </div>
                </div>
                <span className="block w-full text-sm text-foreground py-2 whitespace-pre-wrap break-words">
                  {wave.text.length > 0 && wave.text}
                </span>
                <div className="bg-slate-900 w-full h-80 rounded-lg mt-2"></div>

                <div className="flex items-center justify-between mt-2 w-full">
                  <div className="rounded-full w-10 h-10 p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                    <BsChat />
                  </div>
                  <div className="rounded-full w-10 h-10 p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                    <AiOutlineRetweet />
                  </div>
                  <div className="rounded-full w-10 h-10 p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                    <AiOutlineHeart />
                  </div>
                  <div className="rounded-full w-10 h-10 p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                    <IoStatsChart />
                  </div>
                  <div className="rounded-full w-10 h-10 p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                    <IoShareOutline />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Timeline;
