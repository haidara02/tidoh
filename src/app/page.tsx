import AuthModal from "@/components/AuthModal";
import DiscoverSection from "@/components/DiscoverSection";
import Sidebar from "@/components/Sidebar";
import Timeline from "@/components/Timeline";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-background">
      <AuthModal />
      <div className="w-full h-full flex justify-center text-primary">
        <Sidebar />
        <Timeline />
        <DiscoverSection />
      </div>
    </div>
  );
};

export default Home;
