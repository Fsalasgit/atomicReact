import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtomPages from './pages/atomsPages'
import MoleculesPages from './pages/MoleculesPages';
import OrganimsPages from './pages/OrganimsPages';
import './sass/main.scss'
import { Routes, Route } from 'react-router-dom';
import TemplatePage from './pages/TemplatePage';
import NavbarSite from './component/webComponents/NavbarSite';
import FooterSite from './component/webComponents/footerSite';
import Home from './pages/Home';
import GitPage from './pages/gitPage';







function App() {


  return (
    <>
      <NavbarSite />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gitPages' element={<GitPage />} />
        <Route path='/Atoms' element={<AtomPages />} />
        <Route path='/molecules' element={<MoleculesPages />} />
        <Route path='/organims' element={<OrganimsPages />} />
        <Route path='/template' element={<TemplatePage />} />
      </Routes>


      <FooterSite />
    

    </>
  )
}

export default App
