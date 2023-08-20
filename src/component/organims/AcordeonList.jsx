import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const AcordeonList = () => {
  return (
    <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Datos del acordeón 1</Accordion.Header>
        <Accordion.Body>
          Aqui tengo contenido del acordeón 1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Datos del acordeón 2</Accordion.Header>
        <Accordion.Body>
            Aqui tengo contenido del acordeón 2
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </>
  )
}

export default AcordeonList