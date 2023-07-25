import { VueSes } from '@/assets/svg/icons';
import React from 'react';
import { GoArrowDownRight } from 'react-icons/go';

const Multinivel = () => {
  return (
    <div className="overview-card">
      <div>
        <div className=" w-12 h-12 rounded-full bg-skin-JungleGreen grid place-items-center">
          <VueSes />
        </div>
      </div>
      <p className=" text-xstext-muted">Multinível</p>
      <div className=" inline-flex items-center">
        <h2 className=" text-5xl text-skin-gray-950 font-normal  ">95</h2>
        <span className=" text-base text-skin-gray-950 font-normal">/100</span>
      </div>
      <div className=" text-xs font-normal flex items-center gap-1 ">
        <GoArrowDownRight className=" text-skin-red" size={20} />
        Aumento de 12% em relação ao mês passado
      </div>
    </div>
  );
};

export default Multinivel;
