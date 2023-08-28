import React, {useState, useEffect} from 'react';
import './newsidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FaAngleDown, FaColumns, FaBookOpen } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';



function Newsidebar({ isModulo1Open,isModulo2Open,isModulo3Open, toggleModulo1, toggleModulo2, toggleModulo3, location }) {
    
    const isModuloActive = location.pathname.split('/');
    useEffect(() => {
      if (isModuloActive[1]==='modulo1'){
        toggleModulo1()
      }
      else
      {
        if (isModuloActive[1]==='modulo2'){
            toggleModulo2()
          }
        else
        {
            toggleModulo3()
        }
      }
    }, [isModuloActive[1]])
    
    return (
        <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark"  id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Contenido</div>
                                <a className={`nav-link ${isModuloActive[1] === 'modulo1' ? 'active' : ''} collapsed`} href="#collapseLayouts" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts" onClick={toggleModulo1}>
                                    <div className="sb-nav-link-icon"><FaColumns /></div>
                                    Modulo 1
                                    <div className="sb-sidenav-collapse-arrow">
                                        <FaAngleDown />
                                    </div>
                                </a>
                                <div className={`collapse ${isModulo1Open ? 'show' : ''}`} id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className={`nav-link ${location.pathname === '/modulo1/gitPages' ? 'active' : ''} `} to="/modulo1/gitPages">Git y Github</Link>
                                        <Link className={`nav-link ${location.pathname === '/modulo1/console' ? 'active' : ''} `} to="/modulo1/console">Consola - Comandos básicos</Link>
                                        <Link className={`nav-link ${location.pathname === '/modulo1/reactVite' ? 'active' : ''} `} to="/modulo1/reactVite">React & Vite Js - Instalación de depencias</Link>
                                    </nav>
                                </div>

                                <a className={`nav-link ${isModuloActive[1] === 'modulo2' ? 'active' : ''} collapsed`} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts" onClick={toggleModulo2}>
                                    <div className="sb-nav-link-icon"><FaColumns /></div>
                                    Modulo 2
                                    <div className="sb-sidenav-collapse-arrow">
                                        <FaAngleDown />
                                    </div>
                                </a>
                                <div className={`collapse ${isModulo2Open ? 'show' : ''}`} id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className={`nav-link ${location.pathname === '/modulo2/introBoostrap' ? 'active' : ''} `} to="/modulo2/introBoostrap">Intro atomic React</Link>
                                        <Link className={`nav-link ${location.pathname === '/modulo2/extensiones' ? 'active' : ''} `} to="/modulo2/extensiones">Extensiones de visual</Link>
                                        <Link className={`nav-link ${location.pathname === '/modulo2/atomicDesign' ? 'active' : ''} `} to="/modulo2/atomicDesign">Atomic Design</Link>
                                        <Link className={`nav-link ${location.pathname === '/modulo2/atomicReactbootstrap' ? 'active' : ''} `} to="/modulo2/atomicReactbootstrap">Atomic design ejemplificado con bootstrap</Link>
                                    </nav>
                                </div>

                                <a className={`nav-link ${isModuloActive[1] === 'modulo3' ? 'active' : ''} collapsed`} href="" data-bs-toggle="collapse" data-bs-target="#collapseLayouts3" aria-expanded="false" aria-controls="collapseLayouts" onClick={toggleModulo3}>
                                    <div className="sb-nav-link-icon"><FaColumns /></div>
                                    Modulo 3
                                    <div className="sb-sidenav-collapse-arrow">
                                        <FaAngleDown />
                                    </div>
                                </a>
                                <div className={`collapse ${isModulo3Open ? 'show' : ''}`} id="collapseLayouts3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className={`nav-link ${location.pathname === '/modulo3/librerias' ? 'active' : ''} `} to="/modulo3/librerias">Librerias utilizadas</Link>
                                        <Link className={`nav-link ${location.pathname === '/modulo3/Sass' ? 'active' : ''} `} to="/modulo3/Sass">Sass</Link>
                                        <Link className={`nav-link ${location.pathname === '/modulo3/BEM' ? 'active' : ''} `} to="/modulo3/BEM">BEM</Link>
                                        <Link className={`nav-link ${location.pathname === '/modulo3/bemsass' ? 'active' : ''} `} to="/modulo3/bemsass">Ejemplo de Sass + BEM</Link>
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