import React, { useContext } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBBreadcrumb,
    MDBBreadcrumbItem
  } from 'mdb-react-ui-kit';
  import {Link} from 'react-router-dom';
  import Context from '../Context';


  export default function NavbarPrivado() {

    const { setAuntenticado } = useContext(Context);

    const cerrarSesion = () => {
      setAuntenticado(false);
      
    };

        return (
          <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
              <nav aria-label='breadcrumb'>
                <MDBBreadcrumb>
                  <MDBBreadcrumbItem>
                  <Link to= "/tienda" className="nav-link text-dark" >Tienda</Link>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem>
                  <Link to= "/favoritos" className="nav-link text-dark" >Favoritos</Link>  
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active aria-current='page'>
                  <Link to= "/mispublicaciones" className="nav-link text-dark" >Mis Publicaciones</Link>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active aria-current='page'>
                  <Link to= "/publicar" className="nav-link text-dark" >Publicar</Link> 
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active aria-current='page'>
                  <Link to= "/miperfil" className="nav-link text-dark" >Mi Perfil</Link>  
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active aria-current='page'>
                  <Link onClick={cerrarSesion} className="nav-link text-dark" >
                  <i class="fa-sharp fa-solid fa-right-to-bracket"></i></Link>  
                  </MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </nav>
            </MDBContainer>
          </MDBNavbar>
        );
      }
