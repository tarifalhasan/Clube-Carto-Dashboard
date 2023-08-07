import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";
import pig from "@/assets/images/pig.svg";
import React from "react";
import Image from "next/image";

function Retirar() {
  return (
    <div>
      <SubHeader href="/retirar" name="Retirar" buttonsData={carteira_routes} />

      <div className="my-8 flex justify-between items-center">
        <h3 className="font-bold text-lg">Realize uma retirada</h3>
        <p className="flex items-center py-1 px-3 bg-[#353A40] rounded-lg hover:bg-black cursor-pointer select-none active:bg-gray-600">
          <Image src={pig} alt="pig" width={30} height={30} />
          <span className="ml-1 text-[#74EEAE]">Solicitar retirada</span>
        </p>
      </div>

      <div className="border-2 border-gray-200 rounded-md p-5">hi</div>
    </div>
  );
}

export default Retirar;
