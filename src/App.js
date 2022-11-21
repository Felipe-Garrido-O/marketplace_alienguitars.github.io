import React from "react";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./views/Home";
import Ingresar from "./views/Ingresar";
import  Registrar  from "./views/Registrar";

import Miperfil from './views/Miperfil';
import Publicar from './views/Publicar';
import Mispublicaciones from './views/Mispublicaciones';
import Tienda from "./views/Tienda";
import Favoritos from './views/Favoritos';
import Detalle from "./views/Detalle";
import Context from './Context';
import NotFound from "./views/NotFound";

function App() {

 const [ guitarras, setGuitarras] = useState([]);
 const [ listaPublicacion, setListaPublicacion ] = useState([]);
 const [ usuarios, setUsuarios] = useState([]);
 const [ auntenticado, setAuntenticado] = useState(false);

 const consultarGuitarras = async () => {
    
  const response = await fetch('/guitars.json');
  const data = await response.json();
  
  setGuitarras(data);
  }

  useEffect(() => {
    consultarGuitarras();
    }, []);  

  
  const consultarPublicacion = async () => {
    
    const response = await fetch('/publicaciones.json');
    const datap = await response.json();
    
    setListaPublicacion(datap);
    }
  
    useEffect(() => {
      consultarPublicacion();
      }, []);  


   const consultarUsuarios = async () => {

    const response = await fetch('/usuarios.json');
    const datau = await response.json();

   setUsuarios(datau);
   }   
   
   useEffect(() => {
    consultarUsuarios();
    }, []);  


   const PrivateRoute = ({ auth: {auntenticado}, children}) => {
    return auntenticado ? children : <Navigate to="/"/>
  } 


  const estados = {guitarras, listaPublicacion, usuarios, auntenticado, setAuntenticado, PrivateRoute } 

  return (
    <>
    <div className="App">
    <Context.Provider value={estados}>
       
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ingresar" element={<Ingresar/>}/>
    <Route path="/registrarse" element={<Registrar/>}/>

    <Route path="/tienda" element={<PrivateRoute auth={{auntenticado}}> <Tienda/> </PrivateRoute>}/>
    <Route path="/miperfil" element={<PrivateRoute auth={{auntenticado}}> <Miperfil/> </PrivateRoute>}/>
    <Route path="/publicar" element={<PrivateRoute auth={{auntenticado}}> <Publicar/> </PrivateRoute>}/>
    <Route path="/mispublicaciones" element={<PrivateRoute auth={{auntenticado}}> <Mispublicaciones/> </PrivateRoute>}/>
    <Route path='/tienda/:id' element={<PrivateRoute auth={{auntenticado}}> <Detalle/> </PrivateRoute>}/>
    <Route path="/favoritos" element={<PrivateRoute auth={{auntenticado}}> <Favoritos/> </PrivateRoute>}/>

    <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    </BrowserRouter>  
    </Context.Provider> 
    
    </div>
    </>
  );
}

export default App;
