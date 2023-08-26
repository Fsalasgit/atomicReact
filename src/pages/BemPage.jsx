import React from 'react'

const BemPage = () => {
  return (
<main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>Metodología BEM </h1>
            <div className="row">
                <article className="col-lg-12">
                    <p className='blogContainer__p'>
                        A continuación, hablaremos de la disciplina <em><strong>Modificador de Bloques de Elementos</strong></em> o <strong>BEM</strong> por sus siglas en inglés <em>«block element modifier»</em>, este método nos propone dividir la interfaz de usuario en bloques independientes para crear componentes siendo usado para que nuestras hojas de estilo, <strong>CSS</strong>, <strong>SASS</strong>, <strong>LESS</strong> sean fácil de escalar, mantener, reutilizar a lo largo de un proyecto o nuevos proyectos.
                    </p>
                </article>
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Bloques
                    </h2>
                    <p className='blogContainer__p'>
                        Es el contenedor donde se ubicarán los diversos elementos, que serán cada una de las partes del contenedor padre. Para aclarar esto las siguientes etiquetas HTML son consideradas bloques a simple vista: <em>header, sidebar, aside, main, footer, article, section, ul, ol, div.</em>
                    </p>
                    <div className='d-flex gap-3 flex-column w-50'>
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/HTML-bloque-600x246.png"} alt="html bloque" />
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/CSS-bloque-1024x463.png"} alt="html bloque" />
                    </div>
                </article>
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Bloque modificado
                    </h2>
                    <p className='blogContainer__p'>
                        Para agregar una variación del mismo bloque se utiliza los dos guiones medios para generar esta diferencia, en el siguiente ejemplo se muestra una variación del header en modo oscuro.
                    </p>
                    <div className='d-flex gap-3 flex-column w-50'>
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/HTML-bloque-bloque-modificador-1024x419.png"} alt="html bloque" />
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/CSS-bloque-bloque-modificador-1024x636.png"} alt="html bloque" />
                    </div>
                </article>
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Elementos
                    </h2>
                    <p className='blogContainer__p'>
                        El elemento son diversas partes que compondrán a un bloque y jamás existirán sin la previa definición de este.
                    </p>
                    <p className='blogContainer__p'>
                        El <strong>método BEM</strong> nos indica que cada elemento nace a partir de la clase del bloque que conforma seguida de dos guiones bajos y el nombre clave del elemento
                    </p>
                    <div className='d-flex gap-3 flex-column w-50'>
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/HTML-elemento-1024x473.png"} alt="html bloque" />
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/CSS-elemento-1024x549.png"} alt="html bloque" />
                    </div>
                </article>
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Elemento modificado
                    </h2>
                    <p className='blogContainer__p'>
                        Tal como mencionamos anteriormente en el bloque modificado, también se pueden generar variaciones en los elementos aplicando los dos guiones medios al mismo nivel de dicho elemento..
                    </p>
                    <div className='d-flex gap-3 flex-column w-50'>
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/HTML-elemento-elemento-modificador-1024x364.png"} alt="html bloque" />
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/CSS-elemento-elemento-modificador-1024x939.png"} alt="html bloque" />
                    </div>
                </article>
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        Aplicando BEM con SASS bajo el formato de SCSS
                    </h2>
                    <p className='blogContainer__p'>
                    Si conoces SASS todo nuestro CSS se resume y simplifica aun más.
                    </p>
                    <div className='d-flex gap-3 flex-column w-50'>
                        <img src={"https://fixu.cl/wp-content/uploads/2021/03/SCSS-bloque-bloque-modificador-bloque__elemento-bloque__elemento-modificadaor-1024x1014.png"} alt="html bloque" />
                    </div>
                </article>
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        TIPS
                    </h2>
                    <ul className='blogContainer__p d-flex flex-column gap-3'>
                        <li>
                            <strong>BEM</strong>: Bloque, elemento, modificador.
                        </li>
                        <li>
                            Los bloques más comunes header, sidebar, aside, main, footer, article, section, ul, ol, div
                        </li>
                        <li>
                            Los elementos son a partir de un bloque más dos guiones bajos y el nombre de elemento <em>bloque__elemento</em>
                        </li>
                        <li>
                            Los modificadores son a partir de un bloque o elemento más dos guiones medios y el nombre del modificador <em>bloque—modificador o bloque__elemento–modificador.</em>
                        </li>
                        <li>
                            Una buena práctica es que los modificadores nunca se añadan a la etiqueta HTML sin la clase de bloque o elemento que los precede <em>bloque bloque—modificador </em>es correcto y por el contrario usar solo<em> bloque—modificador </em>no lo es.
                        </li>
                        <li>
                            Usar siempre nombres descriptivos o relacionados en función del bloque, elemento o modificación.
                        </li>
                    </ul>
                </article>
            </div>
    </main>
  )
}

export default BemPage