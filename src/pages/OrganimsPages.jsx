import React from 'react'
import NavbarOrganims from '../component/organims/NavbarOrganims'
import FormOrganims from '../component/organims/FormOrganims'
import AcordeonList from '../component/organims/AcordeonList'

const OrganimsPages = () => {
  return (
    <>
        <h2 className='text-center'>Organismos</h2>

        <article className='container'>
            <section className="row mb-5">

                <h3>Organismo navbar</h3>

                <div className="col-12 mt-3">
                    <NavbarOrganims />
                    
                </div>
            </section>
            <section className="row mb-5">

                <h3>Organismo Formulario</h3>

                <div className="col-4 mt-3">
                    <FormOrganims />
                    
                </div>
            </section>
            <section className="row mb-5">

                <h3>Organismo acordeón</h3>

                <div className="col-4 mt-3">
                    <AcordeonList />

                </div>
            </section>
            

        </article>
    
    </>
  )
}

export default OrganimsPages