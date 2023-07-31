"use client";
import React, { useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import CustomMenus from "./menus";

interface SidebarProps {
  onBackdropClick?: () => void;
  toggled?: boolean;
}

const MobileSidebar: React.FC<SidebarProps> = ({
  onBackdropClick,
  toggled,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className=" ">
      <Sidebar
        className=" bg-[#353A40]  h-screen "
        collapsed={collapsed}
        transitionDuration={1000}
        onBackdropClick={onBackdropClick}
        toggled={toggled}
        breakPoint="all"
      >
        <CustomMenus />
      </Sidebar>
    </div>
  );
};

export default MobileSidebar;
