import DiscoverSection from "@/components/DiscoverSection";
import Sidebar from "@/components/Sidebar";
import Timeline from "@/components/Timeline";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="xl:max-w-[50vw] w-full h-full flex relative">
        <Sidebar />
        <Timeline />
        <DiscoverSection />
      </div>
    </div>
  );
};

export default Home;
