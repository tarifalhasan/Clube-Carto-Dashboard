"use client";

import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SingleButton from "@/components/common/notifications/SingleButton";
import { GlobalStates } from "@/app/context";

function StartNav({ name }: { name: string }) {
  const { updateChannel } = useContext(GlobalStates);

  const router = useRouter();

  const handleRoute = () => {
    router.back();
  };
  const handleClick = () => {
    router.push("/notifications/channels");
    updateChannel(name);
  };

  return (
    <div
      className="py-5 flex flex-col md:flex-row gap-3 justify-between"
      onClick={handleClick}
    >
      <div
        className="w-[20%] flex items-center hover:text-blue-500 cursor-pointer"
        onClick={handleRoute}
      >
        <ArrowBackIosIcon fontSize="small" />
        <p className="font-semibold text-xl">{name}</p>
      </div>
      <div className="w-[85%] flex flex-wrap text-sm gap-2">
        <SingleButton name="Email" />
        <SingleButton name="Push" />
        <SingleButton name="SMS" />
        <SingleButton name="Chat" />
      </div>
    </div>
  );
}

export default StartNav;
