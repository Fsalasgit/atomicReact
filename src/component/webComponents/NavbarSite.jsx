import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import React from 'react'

const NavbarSite = ({ toggleModulo1, toggleModulo2, toggleModulo3 }) => {
  const isModuloActive = location.pathname.split('/');
  return (
    <>
      <Navbar data-bs-theme="dark" className='navbarSite' sticky="top">
          <Container className='navbarSite__container'>
              <Navbar.Brand href="/" className='navbarSite__logo'> ARLogo</Navbar.Brand>
              <Nav className="ms-auto navbarSite__nav">
                <NavLink href="/" className="nav-link link">Home</NavLink>
                <NavLink to="/modulo1/gitPages" className={`nav-link link ${isModuloActive[1] === 'modulo1' ? 'active' : ''}`}  onClick={toggleModulo1}>Modulo I</NavLink>
                <NavLink to="/modulo2/introBoostrap" className={`nav-link link ${isModuloActive[1] === 'modulo2' ? 'active' : ''}`} onClick={toggleModulo2}>Modulo II</NavLink>
                <NavLink to="/modulo3/librerias" className={`nav-link link ${isModuloActive[1] === 'modulo3' ? 'active' : ''}`} onClick={toggleModulo3}>Modulo III</NavLink>
                  
              </Nav>
          </Container>
      </Navbar>
    
    
    </>
  )
}

export default NavbarSite