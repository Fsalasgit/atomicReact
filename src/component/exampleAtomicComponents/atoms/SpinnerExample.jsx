import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';



const ButtonExample = () => {
  const [selectedVariantBorder, setSelectedVariantBorder] = useState('border'); // Estado para almacenar la variante seleccionada

  const handleVariantChange = (event) => {
    setSelectedVariantBorder(event.target.value); // Actualizar el estado cuando cambia la selección
  };

  const [selectedVariantColor, setselectedVariantColor] = useState("primary");

  const handleVariantColor = (event) => {
    setselectedVariantColor(event.target.value);
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-3">
          <Spinner animation={selectedVariantBorder} variant={selectedVariantColor} />
            
        </div>  
        <div className="col-4">
          <div className="mb-2">
            <Form.Label>Cambiar color de boton</Form.Label>
            <Form.Select aria-label="Selecciona una variante" onChange={handleVariantColor} value={selectedVariantColor}>
              <option value="primary">Primary</option>
              <option value="success">Success</option>
              <option value="warning">warning</option>
              
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label>Cambiar la forma</Form.Label>
            <Form.Select aria-label="Selecciona una variante" onChange={handleVariantChange} value={selectedVariantBorder}>
              <option value="border">border</option>
              <option value="grow">grow</option>              
            </Form.Select>
          </div>
        </div>
        <p><code>spinner variant={selectedVariantBorder} variant={selectedVariantColor}</code></p>
      </div>
    </div>
  )
}

export default ButtonExample