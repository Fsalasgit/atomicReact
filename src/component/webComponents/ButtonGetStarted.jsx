import React from 'react'
import Button from 'react-bootstrap/Button';

const ButtonGetStarted = () => {
  return (
    <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-3 ">

                <a href="/gitPages" className='buttonGetStarted__link'>
                    <Button variant="outline-dark" className='buttonGetStarted'>Get started</Button>{' '}
                </a>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default ButtonGetStarted