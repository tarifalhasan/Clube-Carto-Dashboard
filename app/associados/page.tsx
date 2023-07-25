import OverView from '@/components/common/overview/overviews';
import MainNavbar from '@/components/main-navbar/main-navbar';
import React from 'react';

const Associados = () => {
  return (
    <div className=" space-y-5 ">
      <MainNavbar title="Associados" />
      <div className=" py-10">
        <OverView />
      </div>
    </div>
  );
};

export default Associados;
