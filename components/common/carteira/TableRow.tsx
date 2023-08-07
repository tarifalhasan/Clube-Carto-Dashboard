import React from "react";

function TableRow() {
  return (
    <div className="w-full flex justify-between bg-[#F4F4F4CC] py-2 px-4 rounded-lg overflow-auto">
      <span className="mx-3 md:mx-0">NOME</span>
      <span className="mx-3 md:mx-0">CÓDIGO</span>
      <span className="mx-3 md:mx-0">SUPERVISOR</span>
      <span className="mx-3 md:mx-0">PERMISSÃO RETIRADA</span>
    </div>
  );
}

export default TableRow;
