import React from 'react';
import Context from '../Context';
import { useContext } from 'react';
import PubliGrids from '../components/PubliGrids';
import NavbarPrivado from '../components/NavbarPrivado';
import Footer from './Footer';

export default function Mispublicaciones() {

  const {listaPublicacion} = useContext(Context)


  return (
     <>
     <NavbarPrivado/>
    
    <div className='container p-3'>
    <PubliGrids listaPublicacion={listaPublicacion}/>
    </div>

    <Footer/>
    </>
  );
}
