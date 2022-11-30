import React from 'react';
import {useContext} from 'react';
import NavbarPrivado from '../components/NavbarPrivado';
import Footer from '../components/Footer';
import Context from '../Context';

export default function Favoritos() {

  const { guitarras } = useContext(Context);
 
  
  return (
    <>
    <NavbarPrivado/> 

    <div className='container text-center p-2'>
   
    <h3> Favoritos  </h3>

    </div>

    <div className="container p-3">
      <div className='row'>
    {guitarras.filter((producto) => producto.liked 
          ).map((producto) => (
            <div className="card border-info bg-light col-lg-3 col-md-6 m-3 p-1" style={{width: '15rem'}} key={producto.id}>
    <img src={producto.img} className="card-img-top" alt="imagen guitarra" />
    <div className="card-body">
      <h5 className="card-title">{producto.nombre}</h5>
      <hr></hr>
      <ul>
      <li> {producto.categoria} </li>
      </ul>
      <p>Precio: ${producto.precio.toLocaleString("es-CL")}</p>
      <hr/>
      <div className='d-flex justify-content-between'>
      <button  onClick="" className="btn btn-dark">Ver Mas</button>
      <button  onClick="" className="btn btn-primary">Contactar</button>
      </div>  
    </div>
    </div>
          ) )}
    </div>
    </div>

    <Footer/>
   </> 
  );
}
