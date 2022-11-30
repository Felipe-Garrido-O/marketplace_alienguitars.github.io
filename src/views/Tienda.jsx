import React from 'react';
import { useContext } from 'react';
import Grids from '../components/Grids';
import NavbarPrivado from '../components/NavbarPrivado';
import Footer from '../components/Footer';
import Context from '../Context';

export default function Tienda() {
 
  const {guitarras} = useContext(Context); 
 
  return (
    <>
    <NavbarPrivado/> 

    <div className='container p-3'>
    <Grids guitarras={guitarras}/>
    </div>

    <Footer/>
    </>
  );
}
