import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ButtonGetStarted = () => {
  return (
    <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-3 ">

                <Link to="/modulo1/gitPages" className='buttonGetStarted__link'>
                    <Button variant="outline-dark" className='buttonGetStarted'>Get started</Button>
                </Link>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default ButtonGetStarted