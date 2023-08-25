import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';



const ButtonExample = () => {
  const [selectedVariant, setSelectedVariant] = useState('primary'); // Estado para almacenar la variante seleccionada

  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value); // Actualizar el estado cuando cambia la selección
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-3">
          

        </div>  
        <div className="col-4">
          <div className="mb-2">
            <Form.Label>Cambiar color de boton</Form.Label>
            <Form.Select aria-label="Selecciona una variante" onChange={handleVariantChange} value={selectedVariant}>
              <option value="primary">Primary</option>
              <option value="success">Success</option>
              <option value="outline-primary">Outline Primary</option>
              
            </Form.Select>
          </div>

        </div>
        <p><code>Button variant={selectedVariant} size={selectedVariantSize}</code></p>
      </div>
    </div>
  )
}

export default ButtonExample