import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';


const PlaceHolders = () => {
  return (
    <>
    <div className="container">
        <div className="row">

        <div aria-hidden="true">
            <Placeholder.Button  size='xl' xs={10} bg="success"/>
        </div>
        <div aria-hidden="true" className='mt-2'>
            <Placeholder.Button  size='xs' xs={5} bg="danger"/>
            <span className='ms-3'>
            <Placeholder.Button  size='xs' xs={4} bg="primary"/>
            </span>
        </div>
        <div aria-hidden="true" className='mt-2'>
            <Placeholder.Button  size='xl' xs={10} bg="black"/>
        </div>
        </div>

    
      </div>
      
    
    </>
  )
}

export default PlaceHolders