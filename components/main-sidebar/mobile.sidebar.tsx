"use client";
import Logo from "@/assets/Logo";
import { TelemedicineIcon } from "@/assets/svg/icons";
import {
  CashbackRoutess,
  FinanceiroRoutes,
  FuncionáriosRoutes,
  PermissõesRoutes,
  SaúdeRoutes,
  TelemedicineRoutes,
  associadosButtonData,
} from "@/constant/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsCashStack } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { RiHeartAddFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import Menuitem from "./menu-item";

interface SidebarProps {
  onBackdropClick?: () => void;
  toggled?: boolean;
}

const MobileSidebar: React.FC<SidebarProps> = ({
  onBackdropClick,
  toggled,
}) => {
  const [collapsed, setCollapsed] = useState(false);
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
    <div className=" ">
      <Sidebar
        className=" bg-[#353A40]  h-screen "
        collapsed={collapsed}
        transitionDuration={1000}
        onBackdropClick={onBackdropClick}
        toggled={toggled}
        breakPoint="all"
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : active ? "#1A932E" : "",
                  backgroundColor: active ? "#fff" : undefined,
                  borderRadius: "24px",
                };
            },
          }}
          className=" lg:px-4"
        >
          <MenuItem
            key="logo"
            component={<Link href={"/"} />}
            className="pt-7 pb-10"
          >
            <Logo />
          </MenuItem>

          <MenuItem
            key="dashboard"
            component={<Link href="/" />}
            icon={<RxDashboard />}
            active={isRouteActive("/")} // Check if route is active
          >
            Dashboard
          </MenuItem>
          <SubMenu
            // defaultOpen
            label="Associados"
            component={<Link href={"/associados"} />}
            icon={<LiaPeopleCarrySolid />}
            active={isRouteActive("/associados")} // Check if route is active
          >
            <Menuitem childRoute="associados" routes={associadosButtonData} />
          </SubMenu>
          <SubMenu
            label="Cashback"
            component={<Link href={"/cashback"} />}
            icon={<BsCashStack />}
            active={isRouteActive("/cashback")} // Check if route is active
          >
            <Menuitem childRoute="cashback" routes={CashbackRoutess} />
          </SubMenu>
          <SubMenu
            label="Permissões"
            component={<Link href={"/permissions"} />}
            icon={<LiaPeopleCarrySolid />}
            active={isRouteActive("/permissions")} // Check if route is active
          >
            <Menuitem childRoute="permissions" routes={PermissõesRoutes} />
          </SubMenu>

          <SubMenu
            label="Financeiro"
            component={<Link href={"/financeiro"} />}
            icon={<LiaPeopleCarrySolid />}
            active={isRouteActive("/financeiro")} // Check if route is active
          >
            <Menuitem childRoute="financeiro" routes={FinanceiroRoutes} />
          </SubMenu>
          <SubMenu
            label="Saúde"
            component={<Link href={"/health"} />}
            icon={<RiHeartAddFill />}
            active={isRouteActive("/health")} // Check if route is active
          >
            <Menuitem childRoute="health" routes={SaúdeRoutes} />
          </SubMenu>
          <SubMenu
            label="Funcionários"
            component={<Link href={"/employees"} />}
            icon={<HiOutlineUserGroup />}
            active={isRouteActive("/employees")} // Check if route is active
          >
            <Menuitem childRoute="employees" routes={FuncionáriosRoutes} />
          </SubMenu>

          <SubMenu
            label="Telemedicina"
            component={<Link href={"/telemedicine"} />}
            icon={<TelemedicineIcon />}
            active={isRouteActive("/telemedicine")} // Check if route is active
          >
            <Menuitem childRoute="telemedicine" routes={TelemedicineRoutes} />
          </SubMenu>

          <MenuItem
            key="examples"
            icon={<RxDashboard />}
            active={isRouteActive("/examples")}
          >
            Examples
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MobileSidebar;
