import React, { useState } from 'react';
import './App.css'

//Components
import NavBar from './Component/NavBar/NavBar'
import  Banner from './Component/Banner/Banner'
import  RowPost from './Component/RowPost/RowPost'

export default function App() {
  return (
    <div>
      <NavBar/>
      <Banner />

      <RowPost />
    </div>
  );
}
