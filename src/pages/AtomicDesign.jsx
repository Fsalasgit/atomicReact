import React from 'react'
import Figure from 'react-bootstrap/Figure';

const AtomicDesign = () => {
  return (
    <>
        <main className='container blogContainer'>
            <h1 className='blogContainer__tittle'>ATOMIC DESIGN</h1>
            <div className="row">

                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>¿Que es Atomic design?</h2>
                    <p className='blogContainer__p'>Atomic Design es una metodología de diseño de interfaces de usuario que fue propuesta por Brad Frost. Esta metodología divide los componentes de una interfaz en cinco niveles distintos, llamados átomos, moléculas, organismos, plantillas y páginas. Cada nivel representa una abstracción diferente de los componentes y ayuda a estructurar el proceso de diseño y desarrollo de una manera más modular y escalable.</p>
                    <p className='blogContainer__p'>En el contexto de React Bootstrap, Atomic Design se puede aplicar para organizar y estructurar los componentes de la biblioteca de manera más eficiente.</p>
                                
                    
                </article>
                <article className="col-12">
                    <h2 className='blogContainer__ArticleTitle'>Desestructurando átomos</h2>
                    <p className='blogContainer__p'>Para entender este concepto veremos algunos ejemplos desde el reves (Del mayor elemente al mas pequeño) de una barrida ya que en el siguiente módulo veremos a profundida cada uno   de ellos.</p>  
                    
                    <section >
                        <h2 className='blogContainer__ArticleTitle text-center'>Páginas</h2>
                        <div className="d-flex">

                            <Figure>
                                <Figure.Image
                                width={600}
                                // height={180}
                                alt="171x180"
                                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*k5Nw7NauXoVWs752wQqGdA.png"
                                />
                                <Figure.Caption>
                                <a href="https://miro.medium.com/v2/resize:fit:720/format:webp/1*k5Nw7NauXoVWs752wQqGdA.png" target='_blank'>kamathrohan</a>
                                </Figure.Caption>
                            </Figure>


                            <p className='blogContainer__p p-5'>Son instancias específicas de plantillas que contienen contenido real y datos. En el contexto de React Bootstrap, las páginas serían las vistas finales que los usuarios ven y con las que interactúan.</p>  
                        </div>

                    </section>
                    <section >
                        <h2 className='blogContainer__ArticleTitle text-center'>Plantillas (Template)</h2>
                        <div className="d-flex">

                            <Figure>
                                <Figure.Image
                                width={800}
                                // height={180}
                                alt="171x180"
                                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*qpkmE-77THuM1HWrpz1g4g.png"
                                />
                                <Figure.Caption>
                                <a href="https://miro.medium.com/v2/resize:fit:720/format:webp/1*qpkmE-77THuM1HWrpz1g4g.png" target='_blank'>Ver más gande</a>
                                </Figure.Caption>
                            </Figure>


                            <p className='blogContainer__p p-5'>Son diseños predefinidos que establecen la estructura general de una página. En React Bootstrap, las plantillas podrían ser diseños de páginas que utilizan una combinación de organismos y moléculas para definir la disposición general de los componentes.</p>  
                        </div>

                    </section>
                    <section >
                        <h2 className='blogContainer__ArticleTitle text-center'>Organismos</h2>
                        <div className="d-flex">

                            <Figure>
                                <Figure.Image
                                width={850}
                                // height={180}
                                alt="171x180"
                                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*WSg_sX146f45l0hBHYAE_A.png"
                                />
                                <Figure.Caption>
                                <a href="https://miro.medium.com/v2/resize:fit:720/format:webp/1*WSg_sX146f45l0hBHYAE_A.png" target='_blank'>Ver más gande</a>
                                </Figure.Caption>
                            </Figure>


                            <p className='blogContainer__p p-5'>Son combinaciones de átomos y moléculas que forman partes más grandes y completas de una interfaz. Los componentes de React Bootstrap que representan partes de una página, como una barra de navegación con elementos interactivos, podrían considerarse organismos.</p>  
                        </div>

                    </section>
                    <section >
                        <h2 className='blogContainer__ArticleTitle text-center'>Moléculas</h2>
                        <div className="d-flex">

                            <Figure>
                                <Figure.Image
                                width={800}
                                // height={180}
                                alt="171x180"
                                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QVkglk4GnD8lnBjIAqRKCA.png"
                                />
                                <Figure.Caption>
                                <a href="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QVkglk4GnD8lnBjIAqRKCA.png" target='_blank'>Ver más gande</a>
                                </Figure.Caption>
                            </Figure>


                            <p className='blogContainer__p p-5'>Son combinaciones de átomos que trabajan juntos para realizar una función específica. En React Bootstrap, las moléculas podrían ser componentes más complejos que constan de varios átomos, como un formulario con etiquetas, campos de entrada y botones.</p>  
                        </div>

                    </section>
                    <section >
                        <h2 className='blogContainer__ArticleTitle text-center'>Átomos</h2>
                        <div className="d-flex">

                            <Figure>
                                <Figure.Image
                                width={600}
                                // height={180}
                                alt="171x180"
                                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*w5D16nkVjcTjlEzXYxvkVw.png"
                                />
                                <Figure.Caption>
                                <a href="https://miro.medium.com/v2/resize:fit:720/format:webp/1*w5D16nkVjcTjlEzXYxvkVw.png" target='_blank'>Ver más gande</a>
                                </Figure.Caption>
                            </Figure>


                            <p className='blogContainer__p p-5'>Son los elementos de construcción más básicos e indivisibles de una interfaz. En React Bootstrap, los átomos podrían ser los componentes más simples, como botones, campos de entrada, íconos, etc.</p>  
                        </div>

                    </section>
                </article>
                

            </div>


        </main>
    
    </>
  )
}

export default AtomicDesign