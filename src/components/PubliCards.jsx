import React from 'react';

export default function PubliCards({publicacion}) {

  const editar = () => {
    alert("Su publicacion ha sido modificada")
  }


  return (
    <>
    <div className="card bg-light col-lg-3 col-md-6 m-3 p-1" style={{width: '20rem'}}  key={publicacion.id}>
    <img src={publicacion.img} className="card-img-top" alt="imagen guitarra" />
    <div className="card-body">
      <h5 className="card-title">{publicacion.nombre}</h5>
      <hr></hr>
      <ul>
      <li> {publicacion.categoria} </li>
      </ul>
      <p>{publicacion.desc}</p>
      <p>Precio: ${publicacion.precio.toLocaleString("es-CL")}</p>
      <hr/>
      <div className='d-flex justify-content-between'>
      <button  onClick="" className="btn btn-danger">Eliminar</button>
      <button  onClick={editar} className="btn btn-success">Editar</button>
      </div>  
    </div>
    </div>
    </>
  );
}
