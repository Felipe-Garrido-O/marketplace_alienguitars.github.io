import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
import NavbarPrivado from '../components/NavbarPrivado';


export default function Detalle() {
  

  const { id } = useParams();

  const { guitarras } = useContext(Context);
  
  const producto = guitarras.filter((e) => e.id === id);

  return (
     <>
     <NavbarPrivado/>

     <div className='container'>

     <div className="card bg-light border-dark mb-3 m-3 p-1" style={{width: '40rem'}}>
     <div className="row g-0" >
     <div className="col-md-4" key={producto[0].id}>
     <img src={producto[0].img} className="img-fluid rounded-start" alt="imagen guitarra" />
     </div>
     <div className="col-md-8">  
      <div className="card-body">
       <h5 className="card-title">{producto[0].nombre}</h5>
       <hr></hr>
       <ul>
       <li> {producto[0].categoria} </li>
    
       </ul>  
       <h5>Descripcion</h5>
       <p>{producto[0].desc}</p> 
       <div className='d-flex justify-content-between align-items-center'>
       <p>Precio: ${producto[0].precio.toLocaleString("es-CL")}</p>
       <button  onClick="" className="btn btn-primary">Contactar</button>
       </div>
       </div>
       </div>
       </div>
       </div>

       </div>      
    </>
  );
}
