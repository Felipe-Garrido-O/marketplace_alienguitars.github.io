import React from 'react';

export default function Header() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">                                                                                
    <div className="carousel-item active text-center text-light bg-secondary p-5" style={{backgroundImage:`url("https://i.pinimg.com/originals/b4/cf/4a/b4cf4a004749aa23fb73b871056e3ad2.jpg")`, height: '250px'}}>
     <h3>¡Bienvenido!</h3>
     <h4>AlienGuitars</h4> 
     <h5 className='text-danger'>Planet Market</h5>
    </div>
    <div className="carousel-item text-center text-light bg-secondary p-5" style={{backgroundImage:`url("https://fondosmil.com/fondo/20760.jpg")`, height: '250px'}}>
    <h3>¡Encuentra todo tipo de guitarras!</h3>
    </div>
    <div className="carousel-item text-center text-light bg-secondary p-5" style={{backgroundImage:`url("https://www.wallpaperuse.com/wallp/22-224616_m.jpg")`, height: '250px'}} >
     <h3>¡Puedes publicar y comprar las guitarras que desees!</h3> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
   </button>
   </div>

    <div className='p-3 text-danger title'>
    <h3>AlienGuitars</h3>
    <h4>Planet Market</h4>    
    </div>
    <div className='container-fluid py-5 d-flex align-items-end' >
    <h4>Encontraras todas las marcas y estilos de guitarras que necesites,<br></br>
     publicadas por la propia comunidad de AlienGuitars.</h4>     
    
    <button className="btn btn-dark text-light ms-5" type='submit'>Ingresar</button> 
    </div>
    
    </>
  );
}
