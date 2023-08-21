import React from 'react'
import Sidebar from '../component/organims/Sidebar/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
       

    <div className="d-flex" id="wrapper">
        <Sidebar />
    

        <div id="page-content-wrapper">
            <div className="container-fluid">
                <h1 className="mt-4">Aqui va el contenido de cada pagina</h1>
            </div>
        </div>

    </div>
    </>
  )
}

export default Home