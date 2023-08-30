import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import NavExample from '../component/organims/NavExample/NavExample';
import codigo_completo from '../../public/img/completo.png';
import bloqueelemento from '../../public/img/bloqueelemento.png';
import stylecomponent from '../../public/img/navComponenStyle.png';
import bem from '../../public/img/bem.png';
import menu from '../../public/img/menuStyle.png';


const BemSass = () => {
  return (
<main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>Metodologia BEM y Sass</h1>
            <div className="row">
                <article className="col-lg-11 mb-2">
                    <h2 className='blogContainer__ArticleTitle mt-3'>Usando BEM y Sass</h2>
                    <p className='blogContainer__p'>Vamos a ver un ejemplo practicto de la aplicación en un navbar propio de React Bootstrap aplicando estilos en Sass utilizando la Metodologia BEM</p>
                    <p className='blogContainer__p'>
                      En el siguiente codigo podemos ver la estrucura completa de un navbar de Bootstrap
                    </p>
                    <div className="col-9 mb-3">
                    <img src={codigo_completo} alt="" className='img-fluid'/>
                    </div>
                    <p className='blogContainer__p'>En la primera sección podemos ver como nombramos la clase de la etiqueta <strong>nav</strong> con el nombre <strong>NavComponent</strong>. Con esto haremos referencia al bloque principal y en la siguiente etiqueta <strong>a</strong> será nuestro <strong>elemento</strong> utilizando el nombre de clase <strong>NavComponent__contenedor.</strong> Estableciendo esto vamos a darle estilo a nuestro navbar en cuanto al color de fondo y el tamaño de fuente general dentro del mismo agregando lo siguiente en nuestro archivo <strong>scss</strong> de estilos del componente</p>
                    <div className='d-flex gap-2 flex-column'>
                      <img src={bem} alt="" className='img-fluid'/>
                      <img src={menu} alt="" className='img-fluid'/>
                    </div>
                    <p className='blogContainer__p mt-4'>Finalmente desde la etiqueta <strong>div</strong> de la linea 7 vamos tomar como nuevamente un bloque pripal y cada etiqueta <strong>a</strong> dentro de cada <strong>li</strong> serán  nuestros elementos. Adicionalmente para ejemplificar tomamos la primera etiqueta <strong>a</strong> que contiene el link del <strong>Home</strong> para agregarle un <strong>modificador</strong> para darle estilo por estar activa </p>
                    <div className='d-flex gap-2 flex-column'>
                      <img src={bloqueelemento} alt="" className='img-fluid'/>
                      <img src={stylecomponent} alt="" className='img-fluid'/>
                    </div>
                  </article>
                  <p className='blogContainer__p' id="pFinal">El resultado final de nuestro navbar es el siguiente:</p>
                  <div className='col-9 mb-5'>
                    <NavExample />
                  </div>
            </div>
    </main>
  )
}

export default BemSass