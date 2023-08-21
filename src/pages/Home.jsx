import React from 'react'
import portadaAtomicReact from '../../public/img/portadaAtomicReact.jpg'
import ButtonGetStarted from '../component/webComponents/ButtonGetStarted'

const Home = () => {
  return (
    <>
    <div className="container-fluid portadaAtomic">
        <div className="row d-flex">
            <div className="col-6 text-white aling-items-center">
                <h1 className='portadaAtomic__tittle'>ATOMIC REACT</h1>
                <p className='portadaAtomic__p'><strong>Atomic react</strong> es un proyecto creado por y para alumnos de la comisión 49 i de rolling code.</p>
                <p className='portadaAtomic__p'>La intención de este proyecto es tener una herramienta de inclusión para poder tener todos una participación importante en el proyecto final.</p>
            </div>
        </div>
    </div>
    <div className="container-fluid contenido">
        <div className="row">
            <h1 className='contenido__tittle'>Estructuración de contenido</h1>
            <div className="col-12">
                <h2 className='contenido__moduleTittle' >Modulo I</h2>
                <h3>Calentando motores</h3>
                <p className='contenido__p' >En este módulo se verán los siguientes items:</p>
                <ul className='contenido__containerList'>
                    <li>Git y Github - Conceptos y comandos básicos orientado a visual studio</li>
                    <li>Consola - Comandos básicos</li>
                    <li>React & Vite Js - Instalación de depencias</li>
                </ul>
            </div>
            <div className="col-12">
                <h2 className="container-fluid contenido">Modulo II</h2>
                <h3>Bootstrap atómico</h3>
                <p className='contenido__p' >En este módulo se verán los siguientes items:</p>
                <ul className='contenido__containerList'>
                    <li>Instalacion de bootstrap</li>
                    <li>Extenciones de visual</li>
                    <li>Atomic design ejemplicado con bootstrap</li>
                </ul>
            </div>
            <div className="col-12">
                <h2 className="container-fluid contenido">Modulo III</h2>
                <h3>Pincelada final</h3>
                <p className='contenido__p' >En este módulo se verán los siguientes items:</p>
                <ul className='contenido__containerList'>
                    <li>Librerias utilizadas</li>
                    <li>Sass</li>
                    <li>Metodología BEM</li>
                </ul>
            </div>
            <ButtonGetStarted/>   
        </div>
        
    </div>
    </>
  )
}

export default Home