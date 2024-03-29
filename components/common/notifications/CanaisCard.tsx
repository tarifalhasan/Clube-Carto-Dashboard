"use client";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { GlobalStates } from "@/app/context";

function CanaisCard({ name }: { name: string }) {
  const { updateChannel } = useContext(GlobalStates);

  const router = useRouter();

  const handleClick = () => {
    router.push("/notifications/channels");
    updateChannel(name);
  };

  return (
    <div
      className="p-3 w-[200px] h-auto border border-gray-300 rounded-lg hover:bg-red-50 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={
          name === "Email"
            ? "w-full flex justify-end text-green-800"
            : name === "Push"
            ? "w-full flex justify-end text-green-400"
            : name === "SMS"
            ? "w-full flex justify-end text-blue-400"
            : "w-full flex justify-end text-red-400"
        }
      >
        {name === "Email" ? (
          <ForwardToInboxIcon
            sx={{
              fontSize: "42px",
            }}
          />
        ) : name === "Push" ? (
          <NotificationsActiveOutlinedIcon
            sx={{
              fontSize: "42px",
            }}
          />
        ) : name === "SMS" ? (
          <SmsOutlinedIcon
            sx={{
              fontSize: "42px",
            }}
          />
        ) : (
          <MarkChatUnreadOutlinedIcon
            sx={{
              fontSize: "42px",
            }}
          />
        )}
      </div>
      <div className="flex items-center">
        <div
          className={
            name === "Email"
              ? "bg-green-800 h-[40px] w-[8px] rounded-lg"
              : name === "Push"
              ? "bg-green-400 h-[40px] w-[8px] rounded-lg"
              : name === "SMS"
              ? "bg-blue-400 h-[40px] w-[8px] rounded-lg"
              : "bg-red-400 h-[40px] w-[8px] rounded-lg"
          }
        ></div>
        <p className="ml-2 font-semibold">{name}</p>
      </div>
    </div>
  );
}

export default CanaisCard;
