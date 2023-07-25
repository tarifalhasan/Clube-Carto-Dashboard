'use client';
import { useState } from 'react';
import MainSidebar from '@/components/main-sidebar/main-sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <html lang="en">
      <body className={montserrat.className}>
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
      </body>
    </html>
  );
}
