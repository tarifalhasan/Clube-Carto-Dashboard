import { ButtonGroupType } from "@/interfaces";
import Link from "next/link";
import React from "react";
import { MenuItem } from "react-pro-sidebar";

// Define the interface for the component props
interface Props {
  routes: ButtonGroupType[];
  childRoute: string;
}

// Define the Menuitem component
const Menuitem: React.FC<Props> = ({ routes, childRoute }) => {
  return (
    <>
      {routes.map((route, index) => (
        <MenuItem
          component={<Link href={`/${childRoute}/${route.href}`} />}
          className=" bg-[#EEEEEE] "
          key={index}
        >
          {route.name}
        </MenuItem>
      ))}
    </>
  );
};

export default Menuitem;
