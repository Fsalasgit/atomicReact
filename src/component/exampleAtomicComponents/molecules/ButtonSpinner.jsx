import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';    

const ButtonSpinner = () => {

const [selectedVariantBorder, setSelectedVariantBorder] = useState('border'); // Estado para almacenar la variante seleccionada

  const handleVariantBorder = (event) => {
    setSelectedVariantBorder(event.target.value); // Actualizar el estado cuando cambia la selección
  };

  const [selectedVariantColor, setselectedVariantColor] = useState("primary");

  const handleVariantColor = (event) => {
    setselectedVariantColor(event.target.value);
  }


  return (
    <>
        <div className='container'>
            <div className="row">
                <div className="col-3">
                <Button variant={selectedVariantColor} disabled>
                    <Spinner
                    as="span"
                    animation={selectedVariantBorder}
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                </Button>
                
                </div>  
                <div className="col-4">
                <div className="mb-2">
                    <Form.Label>Cambiar color de boton</Form.Label>
                    <Form.Select aria-label="Selecciona una variante" onChange={handleVariantColor} value={selectedVariantColor}>
                    <option value="primary">Primary</option>
                    <option value="success">Success</option>
                    <option value="outline-primary">Outline Primary</option>
                    
                    </Form.Select>
                </div>
                <div className="mb-2">
                    <Form.Label>Cambiar el tamaño del spinner</Form.Label>
                    <Form.Select aria-label="Selecciona una variante" onChange={handleVariantBorder} value={selectedVariantBorder}>
                    <option value="border">border</option>
                    <option value="grow">grow</option>              
                    </Form.Select>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ButtonSpinner