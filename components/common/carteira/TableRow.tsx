import React from "react";

function TableRow() {
  return (
    <div className="w-full flex justify-between bg-[#F4F4F4CC] py-2 px-4 rounded-lg">
      <span>NOME</span>
      <span>CÓDIGO</span>
      <span>SUPERVISOR</span>
      <span>PERMISSÃO RETIRADA</span>
    </div>
  );
}

export default TableRow;
