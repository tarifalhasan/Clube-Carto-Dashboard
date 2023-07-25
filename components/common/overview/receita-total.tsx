import { SignalIcon } from '@/assets/svg/icons';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const ReceitaTotal = () => {
  return (
    <div className="overview-card">
      <div>
        <div className=" w-12 h-12 rounded-full bg-skin-JungleGreen grid place-items-center">
          <SignalIcon />
        </div>
      </div>
      <p className=" text-xstext-muted">Receita Total</p>
      <h2 className=" text-5xl text-skin-gray-950 font-normal  text-2xl">
        R$153.009,89
      </h2>
      <div className=" text-xs font-normal flex items-center gap-1 ">
        <GoArrowUpRight className=" text-skin-JungleGreen" size={20} />
        Aumento de 14% em relação ao mês passado
      </div>
    </div>
  );
};

export default ReceitaTotal;
