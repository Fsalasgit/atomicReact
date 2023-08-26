import React from 'react';
import sinanidamiento from '../../public/img/sass/sinanidamiento.png'
import anidamiento from '../../public/img/sass/anidamiento.png'
import propiedades from '../../public/img/sass/propiedades.png'
import ampersand from '../../public/img/sass/ampersand.png'

const SassPage = () => {
  return (
<main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>Introducción a SASS</h1>
            <div className="row">
                <article className="col-lg-12">
                    <p className='blogContainer__p'>Sass es un acrónimo para Syntactically Awesome Stylesheets, y hace referencia a un preprocesador de hojas de estilo que viene a otorgar poderes al estático y poco práctico lenguaje CSS, convirtiéndolo en un lenguaje de scripting. Gracias a Sass disponemos de variables, sentencias de control y funciones entre otras características, que van destinadas a escribir sin repetirse y reutilizando todo el código lo posible.
                    </p>
                    <p className='blogContainer__p'>
                        Para empezar diremos que existen dos versiones de Sass, la antigua (con extensión .sass) que usaba indentación para separar los bloques, y la nueva, que usa llaves al igual que la sintaxis estándar de CSS (con extensión .scss), por lo que resulta mucho más familiar y es la que vamos a usar en este artículo.
                    </p>
                    <p className='blogContainer__p'> 
                        Ahora sí, comencemos con esta pequeña y breve aproximación a lo que nos ofrece Sass
                    </p>
                </article>
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Variables
                    </h2>
                    <p className='blogContainer__p'>
                        Imaginemos que hemos definido una paleta de colores basada en 4 colores principales, que vamos a repetir continuamente en los diferentes elementos de la web. Ahora imagina que el cliente te pide que cambies la paleta de colores... Tendrás que ir modificando todas las apariciones de esos 4 colores, lo que no facilita el cambio y además aumenta las posibilidades de cometer errores.
                    </p>
                    <p className='blogContainer__p'>
                    Se definen así:
                    </p>
                    <p className='blogContainer__p resaltar'>
                        $variable: 5px;
                    </p>
                </article>                    
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Anidamiento de selector
                    </h2>
                    <p className='blogContainer__p'>
                        En css cuando queremos apuntar a un elemento contenido dentro de otro usamos la sintaxis:
                    </p>
                    <img src={sinanidamiento} alt="codigo sin anidamiento" style={{width:"600px"}}/>
                    <p className='blogContainer__p'>Pero es evidente que <strong>visualmente</strong> sería mejor representar dicha sintaxis de forma <strong>jerárquica</strong>.</p>
                    <img src={anidamiento} alt="codigo anidado" style={{width:"600px"}}/>
                </article>                    
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Anidamiento de propiedades
                    </h2>
                    <p className='blogContainer__p'>
                        De nuevo para evitar repetir código podríamos tener un selector que repite muchas propiedades relacionadas con la fuente. Podemos ahorrar código del siguiente modo:
                    </p>
                    <img src={propiedades} alt="codigo sin anidamiento" style={{width:"600px"}}/>
                </article>                    
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Ampersand &
                    </h2>
                    <p className='blogContainer__p'>
                        Este símbolo se usa para hacer referencia al nombre del selector dentro de su propio bloque, para así no tener que escribirlo continuamente. Un ejemplo con paseudoclases sería:
                    </p>
                    <img src={ampersand} alt="codigo sin anidamiento" style={{width:"600px"}}/>
                </article>
                <article className="col-lg-11">
                    <p className='blogContainer__p mt-4 mb-5'>
                        Si quieres profundizar mas sobre <strong>SASS</strong> puedes visitar el siguiente <a href="https://davidinformatico.com/intro-sass#anidamiento-de-propiedades">enlace</a>
                    </p>
                </article>                     
                
            </div>
    </main>
  )
}

export default SassPage