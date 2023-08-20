import React from 'react'
import FormTexts from '../component/molecules/FormTexts'
import FormEmails from '../component/molecules/FormEmails'
import CardMolecule from '../component/molecules/cardMolecule'
import TableMolecula from '../component/molecules/TableMolecula'


const MoleculesPages = () => {

  return (
    <>
        <h1 className='text-center'>Molécula</h1>

        <article className='container'>
            <div className="row mb-5">
                <h3 className='m-3'>Molécula formulario texto</h3>
                <section className="col-3">
                    <FormTexts />

                </section>
            </div>
            <div className="row mb-5">
                <h3 className='m-3'>Molécula formulario Email</h3>

                <section className="col-3">
                    <FormEmails />

                </section>
            </div>
            <div className="row mb-5">
                <h3 className='m-3'>Molécula card</h3>

                <section className="col-3">
                    <CardMolecule />

                </section>
            </div>
            <div className="row mb-5">
                <h3 className='m-3'>Molécula card</h3>

                <section className="col-3">
                    <TableMolecula />


                </section>
            </div>

        </article>
    </>
  )
}

export default MoleculesPages