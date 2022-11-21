import React from 'react';
import {Link} from 'react-router-dom';
import logoalien2 from '../imgs/logoalien2.gif';


export default function Navbar() {
  return (
  
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <img src={logoalien2} alt="logo" className='imgs'/> 
    <button className="navbar-toggler c-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      
      <Link to= "/" className="nav-link text-dark" >Home</Link>
      <Link to= "/ingresar" className="nav-link text-dark" >Ingresar</Link> 
      <Link to="/registrarse" className="btn btn-dark ms-3">Registrarse</Link> 
      <Link to="*" className="nav-link"></Link>  
        
      </div>
    </div>
  </div>
</nav>
  
  );
}
