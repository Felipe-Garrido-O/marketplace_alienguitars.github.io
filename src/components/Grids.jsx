import React from 'react';
import { useState } from 'react';
import Cards from './Cards';


export default function Grids({guitarras}) {


  const [ busqueda, setBusqueda ] = useState(""); 

   const validarBusqueda = (e) => {
    setBusqueda(e.target.value);
   } 

    return (
    <>
    <div className='container'>
    <div className='buscador bg-muted text-dark p-1 row'>
     <div className='col-11 col-md-5'>
    <form onSubmit="" >
    <input type="text" className='inp' value={busqueda} onChange={validarBusqueda} placeholder="Buscar"/>
    </form>
    </div>
    <div className='col-11 col-md-5'>
    <h5>¡Encuentra la marca y estilo que buscas!</h5>
    </div>
    </div>
    </div>
         
    <div className='row'>
    {guitarras.filter((e) => {
      if (busqueda === " "){
        return e;
      } else if (e.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
        return e;
      } else if (e.categoria.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
        return e; } 
    }
    ).map((e)=> (
     <Cards producto={e} />  
    ))}        
    </div>
    </>
  );
}
