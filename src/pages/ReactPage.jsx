import React from 'react'

const ReactPage = () => {
  return (
    <>
        <main>
        <main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>REACT & VITE JS</h1>
            <div className="row">

                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>¿Que es react?</h2>
                    <p className='blogContainer__p'>React es una <strong>biblioteca</strong> de JavaScript de código abierto utilizada para construir interfaces de usuario interactivas y reutilizables. Permite crear <strong>componentes</strong>  independientes que gestionan su propio estado y se actualizan eficientemente, facilitando el desarrollo de aplicaciones web de una sola página (SPA) y aplicaciones móviles.</p>
                    <p className='blogContainer__p-small'>Un <strong>componente</strong> es un bloque independiente de una interfaz que contiene estructura y lógica, reutilizable en el desarrollo. Puede tener su estado y comunicarse con otros componentes.</p>                
                    
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
                    <h2 className='blogContainer__ArticleTitle'>¿Que es pasa si descargo un proyecto desde github?</h2>
                    <p className='blogContainer__p'>En el caso de baja un proyecto realizado es necesario luego de clonar el repositorio verificar los siguientes pasos</p>
                    <ol className='orderlist__container'>
                        <li>mverte dentro de la carpeta con la consola</li>
                        <li>Instalar react con: npm install</li>
                        <li>Monta el servidor con : npm run dev</li>
                        <li>Copia el link y pegar en el explorador</li>
                       
                    </ol>              
                    
                </article>

            </div>


        </main>
        </main>
    </>
  )
}

export default ReactPage