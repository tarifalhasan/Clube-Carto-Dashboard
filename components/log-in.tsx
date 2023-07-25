'use client';

import React from 'react';
import { Button } from './ui/button';

const Login = () => {
  const ClickCheck = () => {
    console.log('Clicked');
  };
  return (
    <div>
      <Button onClick={ClickCheck}>Click Me To Go</Button>
    </div>
  );
};

export default Login;
