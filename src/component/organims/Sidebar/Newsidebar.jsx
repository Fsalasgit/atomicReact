import React from 'react';
import './newsidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Newsidebar() {
    return (
        <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark"  id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Contenido</div>
                                <a className="nav-link collapsed" href="#collapseLayouts" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Modulo 1
                                    <div className="sb-sidenav-collapse-arrow">
                                        <FaAngleDown />
                                    </div>
                                </a>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/gitPages">Git y Github</Link>
                                        <Link className="nav-link" to="/console">Consola - Comandos básicos</Link>
                                        <Link className="nav-link" to="/reactVite">React & Vite Js - Instalación de depencias</Link>
                                    </nav>
                                </div>

                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Modulo 2
                                    <div className="sb-sidenav-collapse-arrow">
                                        <FaAngleDown />
                                    </div>
                                </a>
                                <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/introBoostrap">Intro atomic React</Link>
                                        <Link className="nav-link" to="/extensiones">Extenciones de visual</Link>
                                        <Link className="nav-link" to="/atomicDesign">Atomic Design</Link>
                                        <Link className="nav-link" to="/atomicReactbootstrap">Atomic design ejemplificado con bootstrap</Link>
                                    </nav>
                                </div>

                                <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts3" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Modulo 3
                                    <div className="sb-sidenav-collapse-arrow">
                                        <FaAngleDown />
                                    </div>
                                </a>
                                <div className="collapse" id="collapseLayouts3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/librerias">Librerias utilizadas</Link>
                                        <Link className="nav-link" to="/Sass">Sass</Link>
                                        <Link className="nav-link" to="/BEM">BEM</Link>
                                        <Link className="nav-link" to="/bemsass">Ejemplo de Sass + BEM</Link>
                                    </nav>
                                </div>
                        
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    );
}

export default Newsidebar