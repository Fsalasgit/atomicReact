import React from 'react'
import Form from 'react-bootstrap/Form';


const FormEmail = () => {
 

  
  return (
    <>
      <div className='container'>
        <div className="row" >
          <div className="col-3 ">
            <Form>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
          
            </Form>
          </div>
        
        </div>
      </div>

    </>
  )
}

export default FormEmail