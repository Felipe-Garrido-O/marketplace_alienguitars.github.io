import React from 'react';
import PubliCards from './PubliCards';


export default function PubliGrids({listaPublicacion}) {

  return (
    <div className='row'>
    {listaPublicacion.map((e)=> (
     <PubliCards publicacion={e} />  
    ))}        
    </div>
  );
}
