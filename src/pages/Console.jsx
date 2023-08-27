import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Console = () => {
  return (

    <main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>Comandos de consola</h1>
            <div className="row">
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-3'>¿Que es la consola de comandos?</h2>
                    <p className='blogContainer__p'>La <strong>consola</strong> de comandos es una interfaz textual en la que los usuarios ingresan comandos para interactuar con un sistema operativo o software, realizando tareas y operaciones.</p>

                    <h2 className='blogContainer__ArticleTitle mt-2'>¿Desde donde podemos usarla?</h2>
                    <p className='blogContainer__p'>Para el uso práctico de nuestro proyectos podemos abrir una consola o terminal de comandos con dos opciones:</p>
                    <ul>
                      <li>
                        <strong className='blogContainer__p'>CMD de Windows:</strong>
                        <p className='blogContainer__p'>Presiona <strong>"Win + R"</strong>, escribe <strong>"cmd"</strong> y pulsa Enter. O bien, busca <strong>"Símbolo del sistema"</strong> en el menú Inicio.</p>
                      </li>
                      <li className='mt-3'>
                        <strong className='blogContainer__p'>Terminal de Vscode:</strong>
                        <p className='blogContainer__p'>Dentro de Visual Studio Code, presiona <strong>"Ctrl + `"</strong>, o ve al menú <strong>"Ver"</strong> y selecciona <strong>"Terminal"</strong> para abrir la terminal integrada.</p>
                      </li>
                    </ul>
                </article>
                <article className="col-lg-11 mb-5">
                    <h2 className='blogContainer__ArticleTitle mt-3'>Los comandos mas útiles</h2>
                    <p className='blogContainer__p'>Estos son los comandos para navegar y abrir Visual Studio Code desde la consola. Simplifica tu proyecto dominando estas herramientas fundamentales para el desarrollo eficiente.</p>
                    <div className="col-6 mb-3">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Acceder a una carpeta especifica</Accordion.Header>
                        <Accordion.Body className='py-2 ps-2'>
                        El comando <strong>"cd"</strong> (change directory) se usa en la consola para moverse entre carpetas. Ingresa <strong>"cd ruta/carpeta"</strong> para acceder a una carpeta específica, utilizando la ruta absoluta o relativa. Ejemplo: <strong>cd /ruta/carpeta.</strong>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Retroceder una carpeta</Accordion.Header>
                        <Accordion.Body className='py-2 ps-2'>
                        Usa <strong>"cd.."</strong> para retroceder a la carpeta padre. "cd" solo te lleva a la carpeta raíz. Ejemplo si estamos en la ruta <strong>ruta/carpeta</strong> y escribimos <strong>cd..</strong> esto nos llevara a la carpeta <strong> ruta/ </strong>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Explorar carpetas del directorio</Accordion.Header>
                        <Accordion.Body className='py-2 ps-2'>
                        El comando <strong>"dir"</strong> en Windows o "ls" en sistemas Unix muestra los contenidos del directorio actual. Al ejecutarlo, se enlistan los <strong>archivos</strong> y <strong>carpetas</strong> presentes en la ubicación actual.    
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Abrir la carpeta en Vscode</Accordion.Header>
                        <Accordion.Body className='py-2 ps-2'>
                        Usa <strong>"code ."</strong> en la terminal. Esto abre la carpeta del proyecto en Visual Studio Code. Facilita la edición y navegación de archivos directamente desde la interfaz de VSCode.    
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    </div>
                  </article>
                
            </div>
    </main>
  )
}

export default Console