'use client';
import OverView from '@/components/common/overview/overviews';
import MainNavbar from '@/components/main-navbar/main-navbar';
import { Button } from '@/components/ui/button';
import { associadosButtonData } from '@/constant/data';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
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
const Associados = () => {
  const router = useRouter();

  const handleClickLink = (path: string) => {
    router.push(path);
  };
  return (
    <div className=" space-y-5 ">
      <MainNavbar title="Associados" />
      <div className="  space-y-5">
        <OverView />
        <div className="s  hidden md:flex flex-wrap  gap-4">
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
        <div className=" flex  flex-col lg:flex-row  lg:items-center gap-8">
          <Lista />
          <Grupos />
        </div>
      </div>
    </div>
  );
};

export default Associados;
