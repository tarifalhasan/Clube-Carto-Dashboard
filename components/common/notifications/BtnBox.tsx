"use client";

import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";

function BtnBox({
  id,
  name,
  active,
  toggle,
}: {
  id: number;
  name: string;
  active: boolean;
  toggle: (id: number) => void;
}) {
  return (
    <div
      className={
        active
          ? "flex justify-between items-center w-[200px] border border-gray-200 p-2 rounded-lg cursor-pointer bg-green-400"
          : "flex justify-between items-center w-[200px] border border-gray-200 p-2 rounded-lg cursor-pointer hover:bg-green-400"
      }
      onClick={() => toggle(id)}
    >
      {name === "Email" ? (
        <EmailOutlinedIcon />
      ) : name === "Push" ? (
        <NotificationsActiveOutlinedIcon />
      ) : name === "SMS" ? (
        <SmsOutlinedIcon />
      ) : (
        <MarkChatUnreadOutlinedIcon />
      )}
      <p>{name}</p>
      <p
        className={
          active
            ? "h-[30px] w-[5px] bg-white rounded-lg"
            : "h-[30px] w-[5px] bg-green-400 rounded-lg"
        }
      ></p>
    </div>
  );
}

export default BtnBox;
