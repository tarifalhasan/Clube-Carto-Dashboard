import DataTableRow from '@/components/common/data-table-row';
import MainNavbar from '@/components/main-navbar/main-navbar';
import SubHeader from '@/components/sub-header';
import { Button } from '@/components/ui/button';
import { ImportarRemessaList, associadosButtonData } from '@/constant/data';
import React from 'react';
import { LuFileSymlink } from 'react-icons/lu';
const ImportarRemessa = () => {
  return (
    <div className=" ">
      <MainNavbar title="Associados" />
      <div className=" space-y-5 py-10">
        <SubHeader
          name="Exportar"
          buttonsData={associadosButtonData}
          href="/associados"
        />

        <div className=" space-y-5 shadow-5xl rounded-2xl p-5 lg:p-8">
          <div className=" flex justify-between items-center">
            <h2 className=" text-5xl">Exportar remessa</h2>
          </div>
          <div className=" space-y-3">
            {ImportarRemessaList.map((data, index) => (
              <DataTableRow key={index} name={data.name} />
            ))}
          </div>
          <Button variant={'secondary'} className=" gap-x-2 px-7">
            <LuFileSymlink size={18} />
            Exportar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImportarRemessa;
