import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";
import Link from "next/link";
import { HiOutlineHashtag } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  { name: "Twitter", path: "twitter", icon: <BsTwitter /> },
  { name: "Home", path: "/", icon: <BiHomeCircle /> },
  { name: "Explore", path: "/explore", icon: <HiOutlineHashtag /> },
  { name: "Notifications", path: "/notifications", icon: <BsBell /> },
  { name: "Messages", path: "/messages", icon: <BsEnvelope /> },
  { name: "Bookmarks", path: "/bookmarks", icon: <BsBookmark /> },
  { name: "Profile", path: "/profile", icon: <BiUser /> },
];

const Sidebar = () => {
  return (
    <section className="sticky top-0 w-[20%] flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-6 rounded-3xl py-2 px-6 text-white"
            href={`/${item.path}`}
            key={item.name}
          >
            <div>{item.icon}</div>
            {item.name !== "Twitter" && <div>{item.name}</div>}
          </Link>
        ))}
        <button className="bg-white hover:bg-white/70 text-black rounded-full py-4 px-6 m-4 text-2xl font-bold  transition duration-200">
          Wave
        </button>
      </div>
      <button className="rounded-full w-full flex items-center justify-between space-x-2 p-4 bg-transparent text-2xl font-bold text-center hover:bg-white/10 transition duration-200">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-12 h-12"></div>
          <div className="text-left">
            <div className="text-sm font-bold text-white">User Name</div>
            <div className="text-xs text-gray-400">@username</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default Sidebar;
