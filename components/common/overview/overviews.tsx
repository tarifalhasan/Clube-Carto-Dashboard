'use client';

import { Button } from '@/components/ui/button';

import React from 'react';

import { IoIosArrowForward } from 'react-icons/io';

interface Button {
  name: string;
  href: string;
}
import { useRouter } from 'next/navigation';
import { associadosButtonData } from '@/constant/data';

import Cashback from './Cashback';

import ReceitaTotal from './receita-total';
import Assossiado from './assossiados';
import Multinivel from './multinível';

const Lista = () => (
  <div className=" pt-5 space-y-3 lg:min-w-[447px] card px-5 py-5 ">
    <h2 className=" text-card-title text-black">Lista</h2>
    <ul className=" space-y-3">
      {Array.from({ length: 5 }, (_, i) => i + 1).map(id => (
        <li className="shadow-tarif p-4 text" key={id}>
          Nome do associado
        </li>
      ))}
    </ul>
    <div className=" pt-5 flex justify-end">
      <Button className=" inline-flex gap-2" variant={'secondary'}>
        Ver lista completa <IoIosArrowForward size={20} />
      </Button>
    </div>
  </div>
);
const Grupos = () => (
  <div className=" lg:min-w-[447px]  space-y-3 card px-5 py-5 ">
    <h2 className=" text-card-title text-black">Lista</h2>
    <ul className=" space-y-3">
      {Array.from({ length: 5 }, (_, i) => i + 1).map(id => (
        <li className="shadow-tarif p-4 text" key={id}>
          Nome do associado
        </li>
      ))}
    </ul>
    <div className=" pt-5 flex justify-end">
      <Button className=" inline-flex gap-2" variant={'secondary'}>
        Ver todos os grupos <IoIosArrowForward size={20} />
      </Button>
    </div>
  </div>
);

const OverView = () => {
  const router = useRouter();

  const handleClickLink = (path: string) => {
    router.push(path);
  };

  return (
    <div className=" space-y-5 ">
      <h2 className=" text-4xl text-skin-gray-950 font-normal">Visão geral</h2>

      <div className="grid  gap-5 lg:gap-8 md:grid-cols-2 xl:grid-cols-4">
        <ReceitaTotal />
        {/* Multinível */}
        <Multinivel />
        {/* Cashback */}
        <Cashback />
        {/* Assossiados */}
        <Assossiado />
      </div>
      {/* Buttons Group */}
      <div className="s pt-6  hidden md:flex flex-wrap  gap-4">
        {associadosButtonData.map((data, index) => (
          <Button
            onClick={() => handleClickLink(data.href)}
            key={index}
            variant={'primary'}
          >
            <span>{data.name}</span>
            <IoIosArrowForward />
          </Button>
        ))}
      </div>
      {/* content */}
      <div className=" flex  flex-col lg:flex-row  lg:items-center gap-8">
        <Lista />
        <Grupos />
      </div>
    </div>
  );
};

export default OverView;
