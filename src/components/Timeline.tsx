"use client";

import React from "react";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";

const Timeline = () => {
  return (
    <main className="flex w-[50%] max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-500">
      <h1 className="p-6 backdrop-blur sticky top-0 z-10 bg-black/10 text-xl font-bold text-white">
        Home
      </h1>
      <div className="flex items-stretch p-4 space-x-2 border-t-[0.5px] border-b-[0.5px] border-gray-500 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <input
            type="text"
            className="w-full h-10 p-4 bg-transparent border-b-[0.5px] border-gray-500 placeholder:text-gray-400 outline-none border-none"
            placeholder="What's happening?"
          />
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button className="bg-white hover:bg-white/70 text-black rounded-full py-2 px-4 text-lg font-bold  transition duration-200">
                Wave
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-full h-full">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="flex items-stretch p-2 space-x-2 border-b-[0.5px] border-gray-500 relative"
          >
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-2 w-full">
                  <h1 className="text-lg font-bold text-white">Koifish</h1>
                  <p className="text-sm text-gray-400">@koifish</p>
                  <div>
                    <BsDot className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-400">2h</p>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-sm text-white my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                nemo numquam quo perferendis voluptatum libero doloremque id
                corrupti laudantium voluptates!
              </div>
              <div className="bg-slate-900 w-full h-80 rounded-lg mt-2"></div>

              <div className="flex items-center justify-start space-x-20 mt-2 w-full">
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
