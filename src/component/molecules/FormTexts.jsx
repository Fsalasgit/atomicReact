import React from 'react'
import Form from 'react-bootstrap/Form';


const FormTexts = () => {
  return (
    <>

      <Form.Label htmlFor="inputText">Nombre</Form.Label>
      <Form.Control
        type="tex"
        id="inputText"
      />

    
    </>
  )
}

export default FormTexts