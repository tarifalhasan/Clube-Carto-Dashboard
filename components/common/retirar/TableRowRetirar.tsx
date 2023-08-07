import React from "react";

function TableRowRetirar({ type }: { type: string }) {
  return (
    <div className="w-full flex items-center justify-between  bg-[#FFFFFF] py-2 px-4 rounded-lg overflow-auto">
      <span className="mx-3 md:mx-0 ">12</span>
      <span className="mx-3 md:mx-0">00/00/0000</span>
      <span className="mx-3 md:mx-0">00/00/0000</span>
      <span className="mx-3 md:mx-0">1461346236245</span>
      <span className="mx-3 md:mx-0">634636</span>
      <span className="mx-3 md:mx-0">NOME DO USUÁRIO</span>
      <span className="mx-3 md:mx-0">R$0,00</span>
      <span
        className={
          type === "green"
            ? "mx-3 md:mx-0 bg-[#4DBE83] px-3 py-1 rounded-full"
            : type === "yellow"
            ? "mx-3 md:mx-0 bg-[#FFB039] px-3 py-1 rounded-full"
            : "mx-3 md:mx-0 bg-black text-white px-3 py-1 rounded-full"
        }
      >
        PAGO
      </span>
    </div>
  );
}

export default TableRowRetirar;
