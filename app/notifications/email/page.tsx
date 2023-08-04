"use client";

import React, { useState } from "react";
import StartNav from "@/components/common/notifications/StartNav";
import BtnBox from "@/components/common/notifications/BtnBox";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const btnState = [
  {
    id: 1,
    name: "Email",
    active: true,
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

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header options
  ["bold", "italic", "underline", "strike"], // Text formatting options
  [{ list: "ordered" }, { list: "bullet" }], // List options
  [{ script: "sub" }, { script: "super" }], // Subscript and Superscript
  [{ indent: "-1" }, { indent: "+1" }], // Indentation
  [{ align: [] }], // Text alignment
  ["link", "image", "video"], // Insert link, image, and video
  ["clean"], // Remove formatting
];
const editorContainerStyle = {
  height: "320px", // Set the desired height here (e.g., 500px).
  // You can also use other CSS properties like 'minHeight', 'maxHeight', etc.
};

function Email() {
  const [active, setActive] = useState(1);
  const [btnGrp, setBtnGrp] = useState(btnState);
  const [value, setValue] = useState("");

  const toggle = (id: number) => {
    setActive(id);
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
        <div>
          <div className="flex flex-col gap-3 border border-gray-200 p-3 rounded-md">
            {displayBtns}
          </div>
        </div>
        {/* rich text editor  */}
        {active === 1 ? (
          <div className="w-full h-[430px] border rounded-md p-3">
            <div className="mb-2 flex gap-4 font-semibold">
              <p className="cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none">
                Design
              </p>
              <p className="cursor-pointer py-1 px-2 border border-gray-300 rounded-lg hover:bg-blue-100 select-none">
                Enviar
              </p>
            </div>

            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={{ toolbar: toolbarOptions, font: false }}
              style={editorContainerStyle}
            />
          </div>
        ) : active === 2 ? (
          <div className="w-full h-[430px] border rounded-md p-3">Push</div>
        ) : active === 3 ? (
          <div className="w-full h-[430px] border rounded-md p-3">SMS</div>
        ) : (
          <div className="w-full h-[430px] border rounded-md p-3">Chat</div>
        )}
      </div>
    </div>
  );
}

export default Email;
