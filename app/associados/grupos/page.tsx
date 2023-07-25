import { AddUserIcon, FileExportIcon } from '@/assets/svg/icons';
import DataTableRow from '@/components/common/data-table-row';
import MainNavbar from '@/components/main-navbar/main-navbar';
import SubHeader from '@/components/sub-header';
import { Button } from '@/components/ui/button';
import { AssoociadorList, associadosButtonData } from '@/constant/data';
import Link from 'next/link';
import React from 'react';

const Rista = () => {
  return (
    <div className=" ">
      <MainNavbar title="Associados" />
      <div className=" space-y-5 py-10">
        <SubHeader
          name="Grupos"
          buttonsData={associadosButtonData}
          href="/associados"
        />

        <div className=" space-y-5 shadow-5xl rounded-2xl p-5 lg:p-8">
          <div className=" flex justify-between items-center">
            <h2 className=" text-5xl">Veja os Grupos</h2>
            <div className=" flex items-center gap-7">
              <Link
                href={'importar-remessa'}
                className=" inline-flex gap-2 outline-none focus:outline-none border-none"
              >
                <FileExportIcon />
                <span className=" text-base text-black font-normal">
                  Exportar remessa
                </span>
              </Link>
              <Link
                href={'exportar-remessa'}
                className=" inline-flex gap-2 outline-none focus:outline-none border-none"
              >
                <FileExportIcon />
                <span className=" text-base text-black font-normal">
                  Exportar remessa
                </span>
              </Link>
            </div>
          </div>
          <div className=" space-y-3">
            {AssoociadorList.map((data, index) => (
              <DataTableRow key={index} name={data.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rista;
