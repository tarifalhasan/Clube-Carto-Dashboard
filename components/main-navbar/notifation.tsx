import { BellIcon } from '@/assets/svg/icons';
import React from 'react';

const Notifation = () => {
  return (
    <button className="  rounded-full bg-white shadow-main h-12 p-[13px] grid place-items-center">
      <BellIcon />
    </button>
  );
};

export default Notifation;
