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
    <section className="sticky top-0 w-[10%] xl:w-[20%] min-w-[70px] xl:min-w-[250px] max-w-[250px] flex flex-col items-center h-screen">
      <div className="flex flex-col p-2 items-center xl:items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className={clsx(
              "flex items-center justify-start hover:bg-foreground/10 text-xl transition duration-200 w-fit rounded-full text-foreground p-2",
              {
                "xl:gap-4 xl:py-2 xl:pr-6": item.name !== "Tydal",
              }
            )}
            href={`/${item.path}`}
            key={item.name}
          >
            <div>{item.icon}</div>
            <div
              className={clsx("hidden", {
                "xl:block": item.name !== "Tydal",
              })}
            >
              {item.name}
            </div>
          </Link>
        ))}
        <Button
          className="rounded-full p-2 text-lg font-bold transition duration-200 cursor-pointer w-10 h-10 max-w-[250px] flex items-center justify-center xl:w-[90%] xl:h-auto"
          variant="default"
          size="lg"
        >
          <span className="block xl:hidden">
            <BsEnvelope />
          </span>
          <span className="hidden xl:block">Wave</span>
        </Button>
      </div>
      <div className="w-full flex items-center justify-center p-3">
        <Button className="flex rounded-full w-full items-center justify-between xl:gap-2 bg-transparent text-2xl py-8 px-4 font-bold hover:bg-foreground/10 transition duration-200 cursor-pointer">
          <div className="flex items-center w-full gap-2 min-w-0">
            <div className="rounded-full bg-slate-400 w-12 h-12 flex-shrink-0"></div>
            <div className="text-left hidden xl:flex xl:flex-col min-w-0 flex-1">
              <div className="text-sm font-bold text-foreground truncate">
                User Namedddddddddddddddddddddddddddddddddd
              </div>
              <div className="text-xs text-muted-foreground truncate">
                @usernamedddddddddddddddddddddddddddddddddd
              </div>
            </div>
          </div>
          <BsThreeDots className="hidden xl:block text-foreground flex-shrink-0" />
        </Button>
      </div>
    </section>
  );
};

export default Sidebar;
