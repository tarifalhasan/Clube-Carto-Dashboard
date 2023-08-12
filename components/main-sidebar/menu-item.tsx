"use client";
import { ButtonGroupType } from "@/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MenuItem } from "react-pro-sidebar";

// Define the interface for the component props
interface Props {
  routes: ButtonGroupType[];
  childRoute: string;
}

// Define the Menuitem component
const Menuitem: React.FC<Props> = ({ routes, childRoute }) => {
  const [path, setPath] = useState("/");
  const paths = usePathname();
  useEffect(() => {
    // This effect will run only on the client-side after the component mounts
    setPath(paths); // Set the current pathname from the router
  }, [paths]);
  // Function to check if a route is active
  const isRouteActive = (href: any) => {
    return path === href || path === href;
  };
  return (
    <>
      {routes.map((route, index) => (
        <MenuItem
          component={<Link href={`/${childRoute}/${route.href}`} />}
          className={isRouteActive(route) ? " !text-red-500" : " text-red-600"}
          key={index}
        >
          {route.name}
        </MenuItem>
      ))}
    </>
  );
};

export default Menuitem;
