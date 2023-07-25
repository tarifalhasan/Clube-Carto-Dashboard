import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from './images';

const Logo = () => {
  return (
    <span>
      <Image src={logo} alt="logo" />
    </span>
  );
};

export default Logo;
