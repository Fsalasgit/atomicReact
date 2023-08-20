import React from 'react'
import Form from 'react-bootstrap/Form';


const FormEmails = () => {
  return (
    <>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="pepito@tucorreo.com" />
        </Form.Group>
    </Form>
    
    </>
  )
}

export default FormEmails