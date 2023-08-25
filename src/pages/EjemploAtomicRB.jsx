import React from 'react'
import ButtonExample from '../component/exampleAtomicComponents/atoms/ButtonExample'

const EjemploAtomicRB = () => {
  return (
    <>
        <main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>ATOMIC DESIGN CON BOOTSTRAP</h1>
            <div className="row">

                <article className="col-12 mb-5">
                    <h2 className='blogContainer__ArticleTitle'>Atomos</h2>
                    <p className='blogContainer__p'>a continuacion tomaramos algunos components atómicos</p>
                    
                    <h3 className='mb-4'>Ejemplo con boton</h3>
                    
                    <ButtonExample />
                               
                    
                </article>
                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>¿Qué es VITE?</h2>
                    <p className='blogContainer__p'>Vite es un entorno de desarrollo ultrarrápido para aplicaciones web modernas. Facilita la creación de proyectos en JavaScript o TypeScript al aprovechar el poder de las importaciones nativas del navegador para obtener un rendimiento instantáneo en el desarrollo.</p>  
                    <h4>Procedimiento de instalacion:</h4>    
                    <ol className='orderlist__container'>
                        <li>ingresa a la carpeta donde instalarás el proyecto (en la consola)</li>
                        <li>escribe el comando: npm create vite@latest</li>
                        <li>Coloca el nombre del proyecto</li>
                        <li>Seleccionar React</li>
                        <li>Seleccionar Javascript</li>
                        <li>Ingresa dentro de la carpeta: cd <strong>Nombre_del_proyecto</strong></li>
                        <li>Abre el proyecto en VS con el comando: code . </li>
                        <li>Instalar react con: npm install</li>
                        <li>Monta el servidor con : npm run dev</li>
                        <li>Copia el link y pegar en el explorador</li>
                    </ol>

                    <p className='blogContainer__p-small'>si no sabes utilizar la consala t recomiendo leer el siguiente post <a href="#">Link consola</a></p> 

                </article>
                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>¿Que pasa si descargo un proyecto desde github?</h2>
                    <p className='blogContainer__p'>En el caso de bajar un proyecto, es necesario luego de clonar el repositorio verificar los siguientes pasos</p>
                    <ol className='orderlist__container'>
                        <li>moverte dentro de la carpeta con la consola</li>
                        <li>Instalar react con: npm install</li>
                        <li>Monta el servidor con : npm run dev</li>
                        <li>Copia el link y pegar en el explorador</li>
                       
                    </ol>              
                    
                </article>

            </div>


        </main>
    
    </>
  )
}

export default EjemploAtomicRB