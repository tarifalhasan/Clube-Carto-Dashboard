"use client";

import MainNavbar from "@/components/main-navbar/main-navbar";
import { useState } from "react";
import { GlobalStates } from "@/app/context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [channel, setChannel] = useState<string>("");

  const updateChannel = (value: string) => {
    setChannel(value);
  };
  return (
    <section className=" relative h-full  space-y-5">
      <MainNavbar title="Notificações" />
      <GlobalStates.Provider value={{ channel, updateChannel }}>
        {children}
      </GlobalStates.Provider>
    </section>
  );
}
