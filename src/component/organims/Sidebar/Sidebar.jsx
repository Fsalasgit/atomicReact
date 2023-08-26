import React from 'react'
import "./Sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
    const location = useLocation();

    if (location.pathname === "/") {
        return null;
      }
  return (
    <div className="bg-light border-right vh-100" id="sidebar-wrapper">
        <div className="sidebar-heading text-center">Contenido</div>
            <div className="list-group list-group-flush overflow-auto h-100">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Modulo 1</Accordion.Header>
                        <Accordion.Body>
                            <Link to="/gitPages" className="list-group-item list-group-item-action bg-light">Git y Github</Link>
                            <Link to="/console" className="list-group-item list-group-item-action bg-light">Consola - Comandos básicos</Link>
                            <Link to="/reactVite" className="list-group-item list-group-item-action bg-light">React & Vite Js - Instalación de depencias</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Modulo 2</Accordion.Header>
                        <Accordion.Body>
                            <Link to="/introBoostrap" className="list-group-item list-group-item-action bg-light">Instalación de Bootstrap</Link>
                            <Link to="/extensiones" className="list-group-item list-group-item-action bg-light">Extenciones de visual</Link>
                            <Link to="/atomicDesign" className="list-group-item list-group-item-action bg-light">Atomic Design</Link>
                            <Link to="/atomicReactbootstrap" className="list-group-item list-group-item-action bg-light">Atomic design ejemplificado con bootstrap</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Modulo 3</Accordion.Header>
                        <Accordion.Body>
                            <Link to="/librerias" className="list-group-item list-group-item-action bg-light">Librerias utilizadas</Link>
                            <Link to="/Sass" className="list-group-item list-group-item-action bg-light">Sass</Link>
                            <Link to="/BEM" className="list-group-item list-group-item-action bg-light">BEM</Link>
                            <Link to="/bemsass" className="list-group-item list-group-item-action bg-light">Ejemplo de Sass + BEM</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Recomendaciones de cursos y blogs (bibliografia)</Accordion.Header>
                    </Accordion.Item>
                </Accordion>
            </div>
    </div>
  )
}

export default Sidebar