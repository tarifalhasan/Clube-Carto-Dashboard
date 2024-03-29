"use client";
import Cashback from "./Cashback";
import Assossiado from "./assossiados";
import Multinivel from "./multinível";
import ReceitaTotal from "./receita-total";

const OverView = () => {
  return (
    <div className=" space-y-5 ">
      <h2 className=" text-4xl text-skin-gray-950 font-normal">Visão geral</h2>

      <div className="grid  gap-5 lg:gap-6 md:grid-cols-2 xl:grid-cols-4">
        <ReceitaTotal />
        {/* Multinível */}
        <Multinivel />
        {/* Cashback */}
        <Cashback />
        {/* Assossiados */}
        <Assossiado />
      </div>
    </div>
  );
};

export default OverView;
