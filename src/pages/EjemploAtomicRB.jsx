import React from 'react'
import ButtonExample from '../component/exampleAtomicComponents/atoms/ButtonExample'
import SpinnerExample from '../component/exampleAtomicComponents/atoms/SpinnerExample'
import ButtonSpinner from '../component/exampleAtomicComponents/molecules/ButtonSpinner'
import FormEmail from '../component/exampleAtomicComponents/molecules/FormEmail'
import Pagination from '../component/exampleAtomicComponents/molecules/paginationMolecules'
import Registroganism from '../component/exampleAtomicComponents/organism/Registroganism'
import NavbarOrganism from '../component/exampleAtomicComponents/organism/NavbarOrganism'

const EjemploAtomicRB = () => {
  return (
    <>
        <main className='container blogContainer'>
            <h1 className='blogContainer__tittle' fixed="sticky">ATOMIC DESIGN CON BOOTSTRAP</h1>
            <div className="row">

                <article className="col-12 mb-5">
                    <h2 className='blogContainer__ArticleTitle ' fixed="top">Atomos</h2>
                    <p className='blogContainer__p'>a continuacion tomaramos algunos components atómicos</p>
                    
                    <h3 className='mb-4'>Ejemplo con boton</h3>

                    <ButtonExample />
                    <h3 className='mb-4'>Ejemplo con spinner</h3>
                    
                    <SpinnerExample />
                               
                    
                </article>
                <article className="col-12 mb-5">
                    <h2 className='blogContainer__ArticleTitle' fixed="top">Molécula</h2>
                    <p className='blogContainer__p'>Al juntar átomos armamos moleculas</p>
                    
                    <h3 className='mb-4'>Ejemplo boton mas spinner</h3>

                    <ButtonSpinner />
                    <h3 className='mb-4'>Ejemplo formulario</h3>

                    <FormEmail />
                    <h3 className='mb-4'>Ejemplo Paginacion</h3>

                    <Pagination />
                               
                    
                </article>
                <article className="col-12 mb-5">
                    <h2 className='blogContainer__ArticleTitle' fixed="top">organismo</h2>
                    <p className='blogContainer__p'>Al juntar moleculas armamos organismos</p>
                    
                    <h3 className='mb-4'>Ejemplo organismo registro</h3>

                    <Registroganism />
                   
                    <h3 className='m-5'>Ejemplo navbar</h3>

                    <NavbarOrganism />
                               
                    
                </article>
            </div>


        </main>
    
    </>
  )
}

export default EjemploAtomicRB