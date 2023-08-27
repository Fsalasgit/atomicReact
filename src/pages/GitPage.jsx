import React from 'react'
import ComandosGit from '../component/webComponents/ComandosGit'

const GitPage = () => {
  return (
    <>

        <main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>GIT & GITHUB</h1>
            <div className="row">

                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>¿Que es git & github?</h2>
                    <p className='blogContainer__p'><strong>Git</strong> es un sistema de control de versiones que permite rastrear cambios en archivos y colaborar en proyectos de desarrollo de software.</p>
                    <p className='blogContainer__p'><strong>GitHub</strong> es una plataforma en línea que utiliza Git para alojar, gestionar y compartir repositorios de código, facilitando la colaboración entre equipos.</p>
                    <p className='blogContainer__p'>En resumen <strong>Git</strong> es encargado de guardar los cambios realizados, mientras que <strong>Github</strong> es la nube donde se comparte dichos repositorios.</p>
                    
                </article>
                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>Github primeros pasos</h2>
                    <p className='blogContainer__p'>Nos enfocaremos principalmente en los comandos más simples (suponiendo que otro usuario crea y gestiona el repositorio).</p>
                    <h3 className='blogContainer__ArticleTitle'>Clonar un reposirotio</h3>
                    <p className='blogContainer__p'>Para descargar un repositorio debemos ingresar con el siguiente comando desde la consola:</p>
                    <p className='blogContainer__p'>git clone <strong>url</strong></p>
                    <p>aqui voy a colocar un video de youtube</p>

                    
                </article>
                <article className="col-12 mb-5">
                    <h2 className='blogContainer__ArticleTitle'>Git comandos básicos</h2>
                    <p className='blogContainer__p'>En este bloque colocaremos los camandos que se deben tener en claro de git.</p>
                    <ComandosGit />
                    
                </article>
            </div>


        </main>


    
    </>
  )
}

export default GitPage