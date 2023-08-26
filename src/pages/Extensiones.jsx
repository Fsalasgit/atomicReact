import React from 'react'

const Extensiones = () => {
  return (
<main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>Extensiones de Visual Studio Code</h1>
            <div className="row">
                <article className="col-lg-11">
                    <p className='blogContainer__p'>Vamos a listar una serie de <strong>extensiones</strong> que son recomendables tener instaladas en nuestro <strong>Visual Studio Code</strong>, ya que las mismas nos permitiran trabajar de manera <strong>ordenada</strong> y algunas inclusive nos ahorraran valioso <strong>tiempo.</strong> </p>
                </article>
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-5'>
                        <img src={"https://prettier.io/icon.png"} alt="logo Prettier" className="logo"/>
                        Prettier
                    </h2>
                    <p className='blogContainer__p'>La extensión <strong>"Prettier"</strong> en Visual Studio Code <strong>automatiza el formateo</strong> del código según reglas predefinidas, asegurando consistencia de <strong>estilo</strong> y <strong>legibilidad</strong>. Simplifica la colaboración, ahorra tiempo al eliminar ajustes manuales y es adaptable a diversos lenguajes, mejorando la eficiencia en el desarrollo de software.</p>
                </article>                    
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-3'>
                        <img src={"https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.4.2/1687441427519/Microsoft.VisualStudio.Services.Icons.Default"} alt="logo eslint" className="logo"/>
                        ESLint
                    </h2>
                    <p className='blogContainer__p'>
                        <strong>ESLint</strong> es una extensión para Visual Studio Code que <strong>analiza</strong> y <strong>señala</strong> problemas en el código JavaScript según reglas personalizables. Ayuda a identificar errores, patrones no deseados y problemas de estilo, mejorando la calidad del código. Facilita el mantenimiento y fomenta prácticas de codificación consistentes y de alta calidad en proyectos individuales y colaborativos.
                    </p>
                </article>                    
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-3'>
                        <img src={"https://xabikos.gallerycdn.vsassets.io/extensions/xabikos/javascriptsnippets/1.8.0/1587489699375/Microsoft.VisualStudio.Services.Icons.Default"} alt="logo eslint" className="logo"/>
                        JavaScript (ES6) code snippets
                    </h2>
                    <p className='blogContainer__p'>
                        La extensión "JavaScript (ES6) code snippets" para Visual Studio Code proporciona una colección de fragmentos de código predefinidos para agilizar la escritura de JavaScript con características ES6. Facilita la creación rápida y precisa de estructuras comunes como funciones de flecha, importaciones/exportaciones y manipulación de arrays/objetos. Mejora la productividad al reducir la escritura manual y los posibles errores.
                    </p>
                </article>                    
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-3'>
                        <img src={"https://waderyan.gallerycdn.vsassets.io/extensions/waderyan/gitblame/10.5.0/1692980720900/Microsoft.VisualStudio.Services.Icons.Default"} alt="logo eslint" className="logo"/>
                        Git Blame
                    </h2>
                    <p className='blogContainer__p'>
                        La extensión "Git Blame" para Visual Studio Code muestra el historial de revisiones de un archivo mientras se trabaja en él. Permite identificar quién modificó cada línea de código y en qué commit, facilitando la atribución de cambios y la comprensión de la evolución del código. Es útil para rastrear responsabilidades y entender el contexto de desarrollo.
                    </p>
                </article>                    
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-3'>
                        <img src={"https://dsznajder.gallerycdn.vsassets.io/extensions/dsznajder/es7-react-js-snippets/4.4.3/1645189962576/Microsoft.VisualStudio.Services.Icons.Default"} alt="logo ES7" className="logo"/>
                        	ES7+ React/Redux/React-Native snippets
                    </h2>
                    <p className='blogContainer__p'>
                        La extensión "ES7+ React/Redux/React-Native snippets" para Visual Studio Code ofrece fragmentos de código predefinidos para JavaScript (ES7+) junto con React, Redux y React-Native. Simplifica la escritura de componentes, acciones, reducers y más en proyectos web y móviles. Acelera el desarrollo al proporcionar atajos para estructuras comunes y patrones en estas tecnologías.
                    </p>
                </article>                    
                <article className="col-lg-11">
                    <h2 className='blogContainer__ArticleTitle mt-3'>
                        <img src={"https://burkeholland.gallerycdn.vsassets.io/extensions/burkeholland/simple-react-snippets/1.2.7/1663085328803/Microsoft.VisualStudio.Services.Icons.Default"} alt="logo SRS" className="logo"/>
                        Simple React Snippets
                    </h2>
                    <p className='blogContainer__p'>
                        La extensión "Simple React Snippets" para Visual Studio Code agiliza la codificación en React al proporcionar fragmentos de código predefinidos. Facilita la creación de componentes, ciclos de vida, enrutamiento y más. Esta herramienta mejora la eficiencia al reducir la escritura manual y alentar las mejores prácticas en el desarrollo de aplicaciones React.
                    </p>
                </article>                    
                <article className="col-lg-11 mb-5">
                    <h2 className='blogContainer__ArticleTitle mt-3'>
                        <img src={"https://seojunyoo.gallerycdn.vsassets.io/extensions/seojunyoo/react-component-preview/1.0.5/1645227049614/Microsoft.VisualStudio.Services.Icons.Default"} alt="logo ReactComponent" className="logo"/>
                        React Component
                    </h2>
                    <p className='blogContainer__p'>
                        La extensión "React Component" para Visual Studio Code permite generar rápidamente plantillas de componentes en proyectos React. Facilita la creación de componentes con estructuras esenciales como estado, propiedades y métodos de ciclo de vida. Esto agiliza el desarrollo y promueve la consistencia en la creación de componentes en aplicaciones React.
                    </p>
                </article>                    
            </div>
    </main>
  )
}

export default Extensiones