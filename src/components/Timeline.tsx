"use client";

import React from "react";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";
import { Button } from "./ui/button";

const Timeline = () => {
  return (
    <main className="flex w-full lg:min-w-[600px] max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-500">
      <h1 className="p-6 backdrop-blur sticky top-0 z-10 text-xl font-bold text-foreground">
        Feed
      </h1>
      <div className="flex items-stretch p-4 space-x-2 border-t-[0.5px] border-b-[0.5px] border-gray-500 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <textarea
            className="w-full min-h-10 max-h-40 p-4 bg-transparent border-b-[0.5px] border-gray-500 placeholder:text-muted-foreground outline-none border-none resize-none overflow-auto"
            placeholder="What's happening?"
            rows={1}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
          <div className="w-full justify-between items-center flex">
            <div></div>
            {/* // Placeholder for future icons or actions */}
            <div className="max-w-[100px]">
              <Button className="rounded-full py-2 px-4 text-md font-bold cursor-pointer transition duration-200">
                Wave
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-full h-full">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="flex items-stretch p-4 w-full space-x-2 border-b-[0.5px] border-gray-500 relative"
          >
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-[90%] h-full">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-2 w-full">
                  <h1 className="text-lg font-bold text-foreground">Koifish</h1>
                  <p className="text-sm text-secondary-foreground">@koifish</p>
                  <div>
                    <BsDot className="text-secondary-foreground" />
                  </div>
                  <p className="text-sm text-secondary-foreground">2h</p>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-sm text-foreground my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                nemo numquam quo perferendis voluptatum libero doloremque id
                corrupti laudantium voluptates!
              </div>
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
