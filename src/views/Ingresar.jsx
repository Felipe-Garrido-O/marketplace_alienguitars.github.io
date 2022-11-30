import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Context from '../Context';
import Footer from '../components/Footer';


export default function Ingresar() {


  const { usuarios, setAuntenticado } = useContext(Context);

  const navigate = useNavigate();

    const prevent = (e) => {
    (e.preventDefault());
  }
  
  const pswRef = useRef(null);
  const correoRef = useRef(null);

    const iniciar = () => {
    let correo = correoRef.current.value;
    let psw = pswRef.current.value;
    if ( !correo && !psw ) {
      alert("LLene con sus datos ");
    }else {
      let user = usuarios.find((e) => e.correo === correo);
      if ( user !== undefined) {
        if (user.psw === psw){
          setAuntenticado(true); 
          navigate(`/tienda`);
        }else {
          alert("contraseña equivocada");
        } 
      } else {
        alert("no existe el correo");
      }      
    }
  }

  return (
    <>
     <Navbar/>
     <div className='container p-3 text-center'>
     <h5> Ingrese sus datos</h5>
    </div>  
    <div className='container py-4' style={{width :'28rem'}}>
    <form onSubmit={prevent}>
   <div className="mb-3">
    <label for="correo" className="form-label">Email</label>
    <input type="email" className="form-control" id="correo" ref={correoRef} placeholder='correo@correo.com'/>
    <div id="emailHelp" className="form-text">No olvide ingresar su email correctamente</div>
  </div>
  <div className="mb-3">
    <label for="psw" className="form-label">Contraseña</label>
    <input type="password" className="form-control" ref={pswRef}
     id="psw"  placeholder='6 digitos'/>
  </div>
  <button type="submit" onClick={iniciar} className="btn btn-dark">Ingresar</button>
  </form>
  </div>
  <Footer/>
  </>
  );
}