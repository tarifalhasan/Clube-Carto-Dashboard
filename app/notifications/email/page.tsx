"use client";

import React, { useState } from "react";
import StartNav from "@/components/common/notifications/StartNav";
import BtnBox from "@/components/common/notifications/BtnBox";

const btnState = [
  {
    id: 1,
    name: "Email",
    active: false,
  },
  {
    id: 2,
    name: "Push",
    active: false,
  },
  {
    id: 3,
    name: "SMS",
    active: false,
  },
  {
    id: 4,
    name: "Chat",
    active: false,
  },
];

function Email() {
  const [btnGrp, setBtnGrp] = useState(btnState);

  const toggle = (id: number) => {
    const newBtnGrp = btnGrp.map((btn) => {
      if (btn.id === id) {
        return { ...btn, active: !btn.active };
      } else {
        return { ...btn, active: false };
      }
    });
    setBtnGrp(newBtnGrp);
  };

  const displayBtns = btnGrp.map((btn) => {
    return (
      <BtnBox
        key={btn.name}
        name={btn.name}
        active={btn.active}
        id={btn.id}
        toggle={toggle}
      />
    );
  });
  return (
    <div>
      <StartNav name="Email" />

      <h2 className="text-lg">
        Crie uma notificação de email personalizada para o seu público
      </h2>
      <div className="py-8 flex gap-5">
        <div className="flex flex-col gap-3 border border-gray-200 p-3 rounded-md">
          {displayBtns}
        </div>
        <div className="w-full border rounded-md p-3"></div>
      </div>
    </div>
  );
}

export default Email;
