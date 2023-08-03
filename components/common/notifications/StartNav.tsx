"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SingleButton from "@/components/common/notifications/SingleButton";

function StartNav({ name }: { name: string }) {
  const router = useRouter();

  const handleRoute = () => {
    router.back();
  };
  return (
    <div className="py-5 flex justify-between">
      <div
        className="w-[15%] flex items-center hover:text-blue-500 cursor-pointer"
        onClick={handleRoute}
      >
        <ArrowBackIosIcon fontSize="small" />
        <p className="font-semibold text-xl">{name}</p>
      </div>
      <div className="w-[85%] flex text-sm gap-2">
        <SingleButton name="Email" />
        <SingleButton name="Push" />
        <SingleButton name="SMS" />
        <SingleButton name="Chat" />
      </div>
    </div>
  );
}

export default StartNav;
