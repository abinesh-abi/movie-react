import React from 'react';
import './App.css'

//Components
import NavBar from './Component/NavBar/NavBar'
import  Banner from './Component/Banner/Banner'
import  RowPost from './Component/RowPost/RowPost'
import { action,originals } from './urls';

export default function App() {
  return (
    <div>
      <NavBar/>
      <Banner />
      <RowPost url={originals} title='Netglix Original' />
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}
