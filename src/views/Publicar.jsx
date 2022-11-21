import React from 'react';
import {Formik, Form, Field} from 'formik';
import NavbarPrivado from '../components/NavbarPrivado';
import Footer from './Footer';

export default function Publicar() {
  return (
    <>
    <NavbarPrivado/> 
    
    <div>
    <div className='container p-2'>
    <h3 className='text-center'>Ingresar Publicacion</h3>   
    </div>
    <Formik>
    <Form>
    <div className='container p-4'>  
    <div className="mb-3" >
    <label for="nombre" className="form-label">Nombre</label>
    <Field type="text" className="form-control" id="nombre" name="nombre" 
     aria-describedby="nombreHelp" placeholder='Guitarra ibanez'/>
    </div>
    
    <div className="mb-3">
    <Field type="text" className="form-control" id="descripcion" name="descripcion" as="textarea"
     aria-describedby="descripcionHelp" placeholder='Descripcion'/>
    </div>

    <div className="mb-3">
    <label for="precio" className="form-label">Precio</label>
    <Field type="number" className="form-control" style={{width :'20rem'}} id="precio" name="precio" 
     aria-describedby="numberHelp" placeholder='30000'/>
    </div>
    
    <div className="mb-3">
    <label for="categoria" className="form-label">Categoria</label><br></br>  
    <Field name="categoria" as="select">
      <option value="electrica">Electrica</option>  
      <option value="electroacustica">Electroacustica</option>  
      <option value="acustica">Acustica</option> 
     </Field>   
    </div>
    <button type='submit' className='btn btn-dark'>Agregar</button>
    </div>
    </Form> 
    </Formik> 
    </div>

    <Footer/>
    </>
  );
}
