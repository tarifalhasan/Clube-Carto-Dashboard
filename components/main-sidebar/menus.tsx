"use client";
import Logo from "@/assets/Logo";
import {
  DiscountsSVG,
  FinanceiroIconSVG,
  FuncionáriosIconSVG,
  HeartOutlineIcon,
  PeopleIconSVG,
  PermissõesIconSvg,
  TelemedicineIcon,
  TicketIconSvg,
} from "@/assets/svg/icons";
import { cinema_routes } from "@/constant/cinema";
import {
  CashbackRoutess,
  DescontosRoutes,
  FinanceiroRoutes,
  FuncionáriosRoutes,
  PermissõesRoutes,
  SaúdeRoutes,
  TelemedicineRoutes,
  associadosButtonData,
} from "@/constant/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCashStack } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Menuitem from "./menu-item";

const CustomMenus = () => {
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
        icon={<PeopleIconSVG />}
        active={isRouteActive("/associados")} // Check if route is active
      >
        <Menuitem childRoute="associados" routes={associadosButtonData} />
      </SubMenu>
      <SubMenu
        label="Descontos"
        component={<Link href={"/discounts"} />}
        icon={<DiscountsSVG />}
        active={isRouteActive("/discounts")} // Check if route is active
      >
        <SubMenu className=" !bg-[#E5E6E6] !font-medium" label="Categorias">
          <Menuitem
            childRoute="discounts"
            routes={DescontosRoutes.Categorias}
          />
        </SubMenu>
        <SubMenu
          className=" !bg-[#E5E6E6] !font-medium"
          label="Estabelecimento"
        >
          <Menuitem
            childRoute="discounts"
            routes={DescontosRoutes.Estabelecimento}
          />
        </SubMenu>
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
        icon={<PermissõesIconSvg />}
        active={isRouteActive("/permissions")} // Check if route is active
      >
        <Menuitem childRoute="permissions" routes={PermissõesRoutes} />
      </SubMenu>

      <SubMenu
        label="Financeiro"
        component={<Link href={"/financeiro"} />}
        icon={<FinanceiroIconSVG />}
        active={isRouteActive("/financeiro")} // Check if route is active
      >
        <Menuitem childRoute="financeiro" routes={FinanceiroRoutes} />
      </SubMenu>
      <SubMenu
        label="Saúde"
        component={<Link href={"/health"} />}
        icon={<HeartOutlineIcon />}
        active={isRouteActive("/health")} // Check if route is active
      >
        <Menuitem childRoute="health" routes={SaúdeRoutes} />
      </SubMenu>
      <SubMenu
        label="Funcionários"
        component={<Link href={"/employees"} />}
        icon={<FuncionáriosIconSVG />}
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
      <SubMenu
        label="Cinema"
        component={<Link href={"/cinema"} />}
        icon={<TicketIconSvg />}
        active={isRouteActive("/cinema")} // Check if route is active
      >
        <Menuitem childRoute="cinema" routes={cinema_routes} />
      </SubMenu>

      <MenuItem
        key="examples"
        icon={<RxDashboard />}
        active={isRouteActive("/examples")}
      >
        Examples
      </MenuItem>
    </Menu>
  );
};

export default CustomMenus;
