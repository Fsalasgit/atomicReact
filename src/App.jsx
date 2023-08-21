import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtomPages from './pages/atomsPages'
import MoleculesPages from './pages/MoleculesPages';
import OrganimsPages from './pages/OrganimsPages';
import Home from './pages/Home';
import './sass/main.scss'
import { Routes, Route } from 'react-router-dom';
import TemplatePage from './pages/TemplatePage';
import NavbarSite from './component/webComponents/NavbarSite';
import FooterSite from './component/webComponents/footerSite';
import Sidebar from './component/organims/Sidebar/Sidebar';
import Console from './pages/Console';
// import Home from './pages/Home';







function App() {


  return (
    <>
      <NavbarSite />
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    <div className="d-flex" id="wrapper">

      <Sidebar />
      <Routes>
        <Route path='/Atoms' element={<AtomPages />} />
        <Route path='/molecules' element={<MoleculesPages />} />
        <Route path='/organims' element={<OrganimsPages />} />
        <Route path='/template' element={<TemplatePage />} />
        <Route path='/console' element={<Console />} />
        
      </Routes>
      </div>

      <FooterSite />
    
    </>
  )
}

export default App
