import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardMolecule = () => {
  return (
    <>
        <Card className='p-2'> 
            <h3>Esto es una tarjeta</h3>
            <Card.Body>Tiene su titulo, cuerpo y boton</Card.Body>
            <Button variant="secondary">Enviar</Button>{' '} 
            
        </Card>
    </>
  )
}

export default CardMolecule