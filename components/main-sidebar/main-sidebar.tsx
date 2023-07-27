'use client';
import Logo from '@/assets/Logo';
import { ArrowRigh } from '@/assets/svg/icons';
import { FinanceiroRoutes, PermissõesRoutes } from '@/constant/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the useRouter hook
import React from 'react';
import { LiaPeopleCarrySolid } from 'react-icons/lia';
import { RxDashboard } from 'react-icons/rx';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import Menuitem from './menu-item';

interface SidebarProps {
  collapsed: boolean;
  collapsedHandler: () => void;
}

const MainSidebar: React.FC<SidebarProps> = ({
  collapsed,
  collapsedHandler,
}) => {
  const path = usePathname();
  // Function to check if a route is active
  const isRouteActive = (href: any) => {
    return path === href || path === href;
  };

  return (
    <div className="flex relative bg-[#353A40]   h-full bg-opacity-20   ">
      <Sidebar
        className=" bg-[#353A40]   h-full bg-opacity-20 "
        collapsed={collapsed}
        transitionDuration={1000}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? '#f5d9ff' : active ? '#1A932E' : '',
                  backgroundColor: active ? '#fff' : undefined,
                  borderRadius: '24px',
                };
            },
          }}
          className=" lg:px-4"
        >
          <MenuItem
            key="logo"
            component={<Link href={'/'} />}
            className="pt-7 pb-10"
          >
            <Logo />
          </MenuItem>

          <MenuItem
            key="dashboard"
            component={<Link href="/" />}
            icon={<RxDashboard />}
            active={isRouteActive('/')} // Check if route is active
          >
            Dashboard
          </MenuItem>
          <SubMenu
            // defaultOpen
            label="Associados"
            component={<Link href={'/associados'} />}
            icon={<LiaPeopleCarrySolid />}
            active={isRouteActive('/associados')} // Check if route is active
          >
            <MenuItem
              component={<Link href={'/associados/lista'} />}
              className=" bg-[#EEEEEE] "
            >
              Lista
            </MenuItem>
            <MenuItem
              component={<Link href={'/associados/adiciona-rassociado'} />}
              className=" bg-[#EEEEEE] "
            >
              Adicionar associado
            </MenuItem>
            <MenuItem
              component={<Link href={'/associados/editar-associado'} />}
              className=" bg-[#EEEEEE] "
            >
              Editar associado
            </MenuItem>
            <MenuItem
              component={<Link href={'/associados/importar-remessa'} />}
              className=" bg-[#EEEEEE] "
            >
              Importar Remessa
            </MenuItem>
            <MenuItem
              component={<Link href={'/associados/exportar-remessa'} />}
              className=" bg-[#EEEEEE] "
            >
              Exportar Remessa
            </MenuItem>
            <MenuItem
              component={<Link href={'/associados/grupos'} />}
              className=" bg-[#EEEEEE] "
            >
              Grupos
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Permissões"
            component={<Link href={'/permissions'} />}
            icon={<LiaPeopleCarrySolid />}
            active={isRouteActive('/permissions')} // Check if route is active
          >
            <Menuitem childRoute="permissions" routes={PermissõesRoutes} />
          </SubMenu>

          <SubMenu
            label="Financeiro"
            component={<Link href={'/financeiro'} />}
            icon={<LiaPeopleCarrySolid />}
            active={isRouteActive('/financeiro')} // Check if route is active
          >
            <Menuitem childRoute="financeiro" routes={FinanceiroRoutes} />
          </SubMenu>

          <MenuItem
            key="examples"
            icon={<RxDashboard />}
            active={isRouteActive('/examples')}
          >
            Examples
          </MenuItem>
        </Menu>
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
