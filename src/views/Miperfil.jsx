import React from 'react';
import NavbarPrivado from '../components/NavbarPrivado';
import Footer from './Footer';

export default function Miperfil() {
  return (
    <>
    <NavbarPrivado/> 
    <div>
    <div className="text-center p-2">
    <h5>Mi Perfil</h5>    
    <img src="https://cdn-icons-png.flaticon.com/128/1144/1144811.png" className="rounded" alt="Imagen Perfil"/>
    </div>
    <div className='container p-2' style={{width:'26rem'}}> 
    <form>
     <div className="mb-3">
    <label for="exampleInputNombre1" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="exampleInputNombre1" aria-describedby="nombreHelp" placeholder='Felipe Garrido'/>
   </div>
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='correo@correo.com'/>
    </div>
    <div className="mb-3">
    <label for="exampleInputDireccion1" className="form-label">Comuna o Ciudad</label>
    <input type="text" className="form-control" id="exampleInputDireccion1" aria-describedby="direccionHelp" placeholder='La Florida'/>
   </div>
   <label for="exampleInputPassword1" className="form-label">Contraseña</label>
   <input type="password" className="form-control" id="exampleInputPassword1" placeholder='6 digitos'/>
   </form>
   <div className='text-center'>
   <button className="btn btn-dark text-light m-4" type='submit'>Guardar</button> 
   </div>
   </div>
   </div>
   
   <Footer/>
   </>
   
  );
}
