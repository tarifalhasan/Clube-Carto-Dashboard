"use client";
import { ArrowRigh } from "@/assets/svg/icons";
import React from "react";
import { Sidebar } from "react-pro-sidebar";
import CustomMenus from "./menus";

interface SidebarProps {
  collapsed: boolean;
  collapsedHandler: () => void;
}

const MainSidebar: React.FC<SidebarProps> = ({
  collapsed,
  collapsedHandler,
}) => {
  return (
    <div className="flex relative bg-[#353A40]   h-full bg-opacity-20   ">
      <Sidebar
        className=" bg-[#353A40]   h-full bg-opacity-20 "
        collapsed={collapsed}
        transitionDuration={1000}
      >
        <CustomMenus />
      </Sidebar>
      <div className="z-[999] absolute right-[-6%]  pt-10">
        <div>
          <button
            className="sb-button  grid  place-items-center w-8 bg-white h-8 rounded-full shadow"
            onClick={collapsedHandler}
          >
            <span>
              <ArrowRigh />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;
