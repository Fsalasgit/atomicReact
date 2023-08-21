import React from 'react';
import Accordion from 'react-bootstrap/Accordion';



const ComandosGit = () => {
  return (
    <>
        <div className="contaner">
            <div className="row">
                <Accordion className='col-6'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>git add</Accordion.Header>
                        <Accordion.Body>
                        <p className="contentList">comunmente se coloca con el (.) punto luego del git add. Añade todos los cambios realizados en el directorio de trabajo al área de preparación de Git, preparándolos para ser incluidos en el siguiente commit.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>git commit</Accordion.Header>
                        <Accordion.Body>
                        <p className="contentList">crea un punto de control en la historia del repositorio con los cambios presentes en el área de preparación, acompañado de un mensaje descriptivo que resume los cambios realizados en ese commit.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>git pull</Accordion.Header>
                        <Accordion.Body>
                        <p className="contentList">Descarga cambios remotos y los fusiona automáticamente con la rama local actual.</p>
                        <p className="contentList">git pull origin <strong>nombre_de_la_rama</strong> descarga y fusionas los archivos de esta rama</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>git fetch</Accordion.Header>
                        <Accordion.Body>
                        <p className="contentList">obtiene los cambios remotos y los almacena localmente sin fusionar, permitiendo revisar y decidir cómo incorporar los cambios.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>git push</Accordion.Header>
                        <Accordion.Body>
                        <p className="contentList">envía los cambios locales a un repositorio remoto, actualizando la versión remota con los nuevos commits (Sube al GitHub).</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    
    
    </>
  )
}

export default ComandosGit