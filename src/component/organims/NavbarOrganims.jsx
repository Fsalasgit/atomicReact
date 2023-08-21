import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarOrganims = () => {
  return (
    <>

      <Navbar bg="primary" data-bs-theme="dark">
          <Container>
              <Navbar.Brand href="#">Logo</Navbar.Brand>
              <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Quienes somos</Nav.Link>
              <Nav.Link href="#">Registro</Nav.Link>
              </Nav>
          </Container>
      </Navbar>

    </>
  )
}

export default NavbarOrganims