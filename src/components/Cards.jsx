import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';


export default function Cards({producto}) {
 

   const {guitarras, setGuitarras} = useContext(Context);

   
    const navigate = useNavigate();
    const irDetalle = () => {
      navigate(`/tienda/${producto.id}`);
    };
   
    const setLiked = (id) => {
      const guitarIndex = guitarras.findIndex((e) => e.id === id );
      guitarras[guitarIndex].liked = !guitarras[guitarIndex].liked;
      setGuitarras([...guitarras]);
    }
  
  return (
    <>
       
    <div className="galeria card col-lg-3 col-md-6 m-3 p-1" style={{width: '15rem'}}  key={producto.id}>
    <svg onClick={()=> setLiked(producto.id)} width="25px" viewBox="0 0 24 24">
      <path fill={producto.liked ? "red" : "gray"} d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,
       5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
    </svg>
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
      <button  onClick={irDetalle} className="btn btn-dark">Ver Mas</button>
      <button  onClick="" className="btn btn-primary">Contactar</button>
      </div>
    </div> 
    </div> 
       
    </>
   
  );
}
