import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const NavbarSite = ({ toggleModulo1, toggleModulo2, toggleModulo3, toggleSidebar }) => {
  const isModuloActive = location.pathname.split('/');
  const shouldShowButton = location.pathname !== '/'; // Verificar si no estás en la ruta "/"
  return (
    <>
      <Navbar data-bs-theme="dark" className='navbarSite ps-3 pe-4' sticky="top">
              <div className="marca d-flex gap-3">
                {shouldShowButton && (
                      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!" onClick={toggleSidebar}><FaBars /></button>
                    )}
                
                <Navbar.Brand href="/" className='navbarSite__logo'> AtomicReact</Navbar.Brand>
              </div>
              <Nav className="ms-auto navbarSite__nav">
                <NavLink to="/" className="nav-link link">Home</NavLink>
                <NavLink to="/modulo1/gitPages" className={`hide nav-link link ${isModuloActive[1] === 'modulo1' ? 'active' : ''}`}  onClick={toggleModulo1}>Modulo I</NavLink>
                <NavLink to="/modulo2/introBoostrap" className={`hide nav-link link ${isModuloActive[1] === 'modulo2' ? 'active' : ''}`} onClick={toggleModulo2}>Modulo II</NavLink>
                <NavLink to="/modulo3/librerias" className={`hide nav-link link ${isModuloActive[1] === 'modulo3' ? 'active' : ''}`} onClick={toggleModulo3}>Modulo III</NavLink>
                  
              </Nav>
          {/* <Container className='navbarSite__container'>

          </Container> */}
      </Navbar>
    
    
    </>
  )
}

export default NavbarSite