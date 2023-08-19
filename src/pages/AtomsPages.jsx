import React from 'react'
import ClasicsButtons from '../component/atoms/ClasicsButtons'
import Outlinebuttons from '../component/atoms/Outlinebuttons'
import BadgesTypes from '../component/atoms/BadgesTypes'
import CloseButtons from '../component/atoms/CloseButtons'
import Spiners from '../component/atoms/Spiners'

const AtomPages = () => {
  return (
    <>

        <h2 className='text-center'>En esta seccion colocamos los botones</h2>

        <section className='container'>
            <div className="row">
                <h3>Botones clasicos de bootstrap</h3>

                <div className="col-12 mt-3">
                    <p>Estos son los botones basicos de bootstrap</p>
                    <ClasicsButtons />
                    
                </div>
                <div className="col-12 mt-3">
                    <p>Estos son los botones outline de bootstrap</p>
                    <Outlinebuttons />
                    
                </div>
            </div>
        </section>
        <section className='container mt-5'>
            <div className="row">
                <h3>Badges clasicos de bootstrap</h3>

                <div className="col-12 mt-3">
                    <p>Estos son los Badges basicos de bootstrap</p>
                    <BadgesTypes />
                    
                </div>

            
                
                

            </div>
        </section>
        <section className='container mt-5'>
            <div className="row">
                <h3>Boton de cerrar</h3>

                <div className="col-12 mt-3">
                    <p>Close button</p>
                    <CloseButtons />
                    
                </div>

            
                
                

            </div>
        </section>
        <section className='container mt-5'>
            <div className="row">
                <h3>Spinners</h3>

                <div className="col-12 mt-3">
                    <p>Spiners de bootstrapt</p>
                    <Spiners />
                    
                </div>

            
                
                

            </div>
        </section>
    
    </>
  )
}

export default AtomPages