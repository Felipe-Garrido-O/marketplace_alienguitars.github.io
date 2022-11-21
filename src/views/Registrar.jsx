import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { useContext } from 'react';
import Context from '../Context';
import { nanoid } from 'nanoid';

export default function Registrar() {

  const { usuarios, setUsuarios} = useContext(Context);

  const prevent = (e) => {
    (e.preventDefault());
  }

  const registro = () => {
    let correo = document.getElementById("remail").value;
    let psw = document.getElementById("rpsw").value;
    let pswRpt = document.getElementById("pswRpt").value;
    let nombre = document.getElementById("rnombre").value;
    let comuna = document.getElementById("rlugar").value;
    if (correo !== "" && psw !== "") {
      if (psw === pswRpt) {
        let existe = usuarios.filter((e) => e.correo === correo);
        if (existe.length === 0) {
          setUsuarios([...usuarios,{id: nanoid(), nombre: nombre, correo: correo,
          comuna: comuna, psw: psw }]);
          alert("Usuario registrado");
           } else {
            alert("El correo ya existe");
          }
        } else {
          alert("contraseñas distintas");
        }}};

  return (
    <>
     <Navbar/>
    <div className='container p-4' style={{width: '28rem'}}>
    <h4 className='text-center'> Registro de Usuario </h4> 
    <form onSubmit={prevent}>
    <div className="mb-3">
    <label for="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="rnombre" aria-describedby="nombreHelp" placeholder='Felipe Garrido'/>
   </div>
   <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="remail" aria-describedby="emailHelp" placeholder='correo@correo.com'/>
   </div>
   <div className="mb-3">
    <label for="lugar" className="form-label">Comuna o Ciudad</label>
    <input type="text" className="form-control" id="rlugar" aria-describedby="direccionHelp" placeholder='La Florida'/>
   </div>
   <div className='mb-3'>
   <label for="psw" className="form-label">Contraseña</label>
   <input type="password" className="form-control" id="rpsw" placeholder='6 digitos'/>
   </div>
   <div className='mb-3'>
   <label for="pswRpt" className="form-label">Repetir Contraseña</label>
   <input type="password" className="form-control" id="pswRpt" placeholder='6 digitos'/>
   </div>
   <button onClick={registro} className="btn btn-dark text-light" type='submit'>Ingresar</button>
   </form>
   </div>   
   <Footer/>       
   </> 
  );
}
