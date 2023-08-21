import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react'

const NavbarSite = () => {
  return (
    <>
        <Navbar data-bs-theme="dark" className='navbarSite' sticky="top">
            <Container className='navbarSite__container'>
                <Navbar.Brand href="#" className='navbarSite__logo'> ARLogo</Navbar.Brand>
                <Nav className="ms-auto navbarSite__nav">
                    <Nav.Link href="#" className="navbarSite__link">Home</Nav.Link>
                    <Nav.Link href="#" className="navbarSite__link">Modulo I</Nav.Link>
                    <Nav.Link href="#" className="navbarSite__link">Modulo II</Nav.Link>
                    <Nav.Link href="#" className="navbarSite__link">Modulo III</Nav.Link>
                   
                </Nav>
            </Container>
        </Navbar>
    
    
    </>
  )
}

export default NavbarSite