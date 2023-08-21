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
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Intro a react + vite (instalación)</Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Consola cmd</Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Github </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Modulo 2</Accordion.Header>
                        <Accordion.Body>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Instalación de Bootstrap</Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Atomic design resumen</Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Atomic design + bootstrap</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Modulo 3</Accordion.Header>
                        <Accordion.Body>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Sass</Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Sass + Bemm</Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Menu 3</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Recomendaciones de cursos y blogs (bibliografia)</Accordion.Header>
                        <Accordion.Body>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Sass</Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Sass + Bemm</Link>
                            <Link to="#" className="list-group-item list-group-item-action bg-light">Menu 3</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
    </div>
  )
}

export default Sidebar