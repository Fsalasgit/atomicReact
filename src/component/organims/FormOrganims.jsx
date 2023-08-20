import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormOrganims = () => {
    const clickBoton = console.log("hiciste click")
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="ingrese su correo" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" required />
            </Form.Group>
            <Button type='submit' variant="primary ms-auto" onClick={clickBoton}>Enviar</Button>{' '}
        </Form>
    </>
  )
}

export default FormOrganims