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
                    <p className='blogContainer__p-small'>Un componente es un bloque independiente de una interfaz que contiene estructura y lógica, reutilizable en el desarrollo. Puede tener su estado y comunicarse con otros componentes.</p>                
                    
                </article>
                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>Github primeros pasos</h2>
                    <p className='blogContainer__p'>Nos enfocaremos principalmente en los comandos más simples (suponiendo que otro usuario crea y gestiona el repositorio).</p>
                    <h3 className='blogContainer__ArticleTitle'>Clonar un reposirotio</h3>
                    <p className='blogContainer__p'>Para descargar un repositorio debemos ingresar con el siguiente comando desde la consola:</p>
                    <p className='blogContainer__p'>git clone <strong>url</strong></p>
                    <p>aqui voy a colocar un video de youtube</p>

                    
                </article>
                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>Git comandos básicos</h2>
                    <p className='blogContainer__p'>En este bloque colocaremos los camandos que se deben tener en claro de git.</p>
                    
                </article>
            </div>


        </main>
        </main>
    </>
  )
}

export default ReactPage