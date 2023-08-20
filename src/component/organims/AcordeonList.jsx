import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const AcordeonList = () => {
  return (
    <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Datos del acordeon 1</Accordion.Header>
        <Accordion.Body>
          Aqui tengo contenido del acorden 1
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Datos del acordeon 2</Accordion.Header>
        <Accordion.Body>
            Aqui tengo contenido del acorden 2
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </>
  )
}

export default AcordeonList