import React from 'react'

const IntroBootstrapPages = () => {
  return (
    <>
         <main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>REACT-BOOTSTRAP</h1>
            <div className="row">

                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>¿Que es React-Bootstrap?</h2>
                    <p className='blogContainer__p'>React Bootstrap es unas <strong>biblioteca</strong> que combina React y los estilos de Bootstrap para crear interfaces web. Se instala, se importan componentes y se utilizan en JSX, ofreciendo personalización.</p>
                    <p className='blogContainer__p-small'>Ejemplos y detalles están en la documentación oficial. <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction" target="_blank" rel="noopener noreferrer">link</a></p>                
                    
                </article>
                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>proyecto React-Boostrap</h2>
                    <p className='blogContainer__p'>Para usar React-Bootstrap en tu proyecto de React podemos dividir en 4 secciones:</p>  
                    
                    <ol className='orderlist__container'>
                        <li>Instalación: npm install react-bootstrap bootstrap</li>
                        <li>Importación</li>
                        <li>Uso de Componentes</li>
                        <li>Personalización</li>

                    </ol>

                    <p className='blogContainer__p-small'>el item "1" utilizamos una sola vez. Pero el item "2 al 4" repetiremos en cada paso</p> 

                </article>
                

            </div>


        </main>
    
    </>
  )
}

export default IntroBootstrapPages