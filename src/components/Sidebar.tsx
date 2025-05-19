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
import { Button } from "./ui/button";
import clsx from "clsx";

const NAVIGATION_ITEMS = [
  { name: "Tydal", path: "/", icon: <BsTwitter /> },
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
            className={clsx(
              "hover:bg-foreground/10 text-2xl transition duration-200 w-fit rounded-full text-foreground p-2",
              {
                "text-2xl flex items-center justify-start space-x-6 py-2 px-6":
                  item.name !== "Tydal",
              }
            )}
            href={`/${item.path}`}
            key={item.name}
          >
            <div>{item.icon}</div>
            {item.name !== "Tydal" && <div>{item.name}</div>}
          </Link>
        ))}
        <Button
          className="rounded-full py-6 px-6 m-4 text-2xl font-bold transition duration-200 cursor-pointer"
          variant="default"
          size="lg"
        >
          Wave
        </Button>
      </div>
      <button className="rounded-full w-full flex items-center justify-between space-x-2 p-4 bg-transparent text-2xl font-bold text-center hover:bg-foreground/10 transition duration-200">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-12 h-12"></div>
          <div className="text-left">
            <div className="text-sm font-bold text-foreground">User Name</div>
            <div className="text-xs text-muted-foreground">@username</div>
          </div>
        </div>
        <div>
          <BsThreeDots className="text-foreground" />
        </div>
      </button>
    </section>
  );
};

export default Sidebar;
