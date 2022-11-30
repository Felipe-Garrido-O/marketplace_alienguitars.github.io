import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import Context from '../Context';
import { nanoid } from 'nanoid';

export default function Registrar() {

  const { usuarios, setUsuarios} = useContext(Context);

  const prevent = (e) => {
    (e.preventDefault());
  }
  
  const nombreRef = useRef(null);
  const correoRef = useRef(null);
  const comunaRef = useRef(null);
  const pswRef = useRef(null);
  const pswRptRef = useRef(null);


  const registro = () => {
    let nombre = nombreRef.current.value;
    let correo = correoRef.current.value;
    let comuna = comunaRef.current.value;
    let psw = pswRef.current.value;
    let pswRpt = pswRptRef.current.value;
    
    if (correo !== "" && psw !== "" && pswRpt !== "") {
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
    <input type="text" className="form-control" ref={nombreRef} id="rnombre"  placeholder='Felipe Garrido'/>
   </div>
   <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="email" className="form-control" ref={correoRef}  id="remail"  placeholder='correo@correo.com'/>
   </div>
   <div className="mb-3">
    <label for="lugar" className="form-label">Comuna o Ciudad</label>
    <input type="text" className="form-control" ref={comunaRef} id="rlugar"  placeholder='La Florida'/>
   </div>
   <div className='mb-3'>
   <label for="psw" className="form-label">Contraseña</label>
   <input type="password" className="form-control" ref={pswRef} id="rpsw" placeholder='6 digitos'/>
   </div>
   <div className='mb-3'>
   <label for="pswRpt" className="form-label">Repetir Contraseña</label>
   <input type="password" className="form-control" ref={pswRptRef} id="pswRpt" placeholder='6 digitos'/>
   </div>
   <button onClick={registro} className="btn btn-dark text-light" type='submit'>Ingresar</button>
   </form>
   </div>   
   <Footer/>       
   </> 
  );
}
