import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Spiners = () => {

  const [selectedBorder, setSelectedBorder] = useState('border'); // Estado para almacenar la variante seleccionada

  const handleVariantBorder = (event) => {
    setHandleVariantBorder(event.target.value); // Actualizar el estado cuando cambia la selección
  };
  return (
    <>
      
      
      <div className='container'>
      <div className="row">
        <div className="col-3">
         <Spinner animation={selectedBorder} variant="primary" />

        </div>  
        <div className="col-4">
          <div className="mb-2">
            <Form.Label>Cambiar color de boton</Form.Label>
            <Form.Select aria-label="Selecciona una variante" onChange={handleVariantChange} value={selectedVariant}>
              <option value="primary">primary</option>
              <option value="success">secondary</option>
              <option value="warning">warning</option>
              
            </Form.Select>
          </div>
          <div className="mb-2">
            <Form.Label>Cambiar el tamaño</Form.Label>
            <Form.Select aria-label="Selecciona una variante" onChange={handleVariantBorder} value={selectedBorder}>
              <option value="border">border</option>
              <option value="grow">grow</option>              
            </Form.Select>
          </div>
        </div>
        <p><code>Button variant={selectedVariant} size={selectedVariantSize}</code></p>
      </div>
    </div>
        
    </>
  )
}

export default Spiners