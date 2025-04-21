import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

export default function ParentHomePage() {
  const [sharedData,setSharedData]=useState('Initial data')
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet context={{sharedData,setSharedData}} />
      </main>
    </>
  );
}
