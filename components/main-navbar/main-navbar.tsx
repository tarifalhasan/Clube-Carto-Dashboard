'use client';
import React, { useState } from 'react';
import SearchBar from './search-bar';
import Notifation from './notifation';
import ProfileMenu from './profile-menu';
import { HiMenuAlt2 } from 'react-icons/hi';

import dynamic from 'next/dynamic';
const NonSSRMobile = dynamic(() => import('../main-sidebar/mobile.sidebar'), {
  ssr: false,
});
interface Props {
  title: string;
}
const MainNavbar: React.FC<Props> = ({ title }) => {
  const [toggled, setToggled] = useState(false);

  const onBackdropClick = () => {
    setToggled(false);
  };
  const onToggleClick = () => {
    setToggled(!toggled);
  };

  return (
    <div>
      <header className=" border-b border-skin-navbar-boder w-full py-3 flex items-center justify-between">
        <div>
          <h2 className=" text-lg font-semibold lg:text-6xl">{title}</h2>
        </div>
        <div className=" flex items-center gap-5">
          <SearchBar />
          <Notifation />
          <ProfileMenu />
          <div className=" lg:hidden">
            <button onClick={onToggleClick}>
              <HiMenuAlt2 size={32} />
            </button>
          </div>
        </div>
      </header>
      <NonSSRMobile onBackdropClick={onBackdropClick} toggled={toggled} />
    </div>
  );
};

export default MainNavbar;
