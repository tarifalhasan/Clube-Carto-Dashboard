import { ProfileIcon } from "@/assets/svg/icons";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface CardInterface {
  name: string;
  amount: string;
  description: string;
}

function Card(props: CardInterface) {
  return (
    <div className="overview-card p-3">
      <div>
        <div className=" w-10 h-10 rounded-full bg-skin-JungleGreen grid place-items-center">
          <ProfileIcon />
        </div>
      </div>
      <p className=" text-xstext-muted">Receita Total</p>
      <h2 className=" text-skin-gray-950 font-normal  text-2xl">
        R$153.009,89
      </h2>
      <div className="text-xs font-normal flex items-center gap-1 ">
        <GoArrowUpRight className=" text-skin-JungleGreen" size={20} />
        Aumento de 14% em relação ao mês passado
      </div>
    </div>
  );
}

export default Card;
