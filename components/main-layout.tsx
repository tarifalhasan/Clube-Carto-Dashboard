'use client';
import React from 'react';
import { useState } from 'react';
import MainSidebar from '@/components/main-sidebar/main-sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <main className=" w-full h-full xl:flex ">
      <div
        className={`h-full   ${
          !collapsed ? 'lg:min-w-[250px]' : 'lg:min-w-[80px]'
        } hidden xl:block`}
      >
        <div className="fixed h-full">
          <MainSidebar
            collapsedHandler={handleCollapsed}
            collapsed={collapsed}
          />
        </div>
      </div>
      <div className=" w-full   px-5 xl:px-10">{children}</div>
    </main>
  );
};

export default MainLayout;
