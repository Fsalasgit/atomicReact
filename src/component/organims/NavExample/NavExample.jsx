import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavExample = () => {
  return (
<nav className="navbar navbar-expand-lg NavComponent">
  <div className="container-fluid NavComponent__contenedor">
    <a className="contenedor__Marca" href="#">Nuestra Marca</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link menu__link menu__link--active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavExample