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







function App() {


  return (
    <>
      <NavbarSite />

      <Routes>
        <Route path='/Atoms' element={<AtomPages />} />
        <Route path='/molecules' element={<MoleculesPages />} />
        <Route path='/organims' element={<OrganimsPages />} />
        <Route path='/template' element={<TemplatePage />} />
      </Routes>

      <FooterSite />
    
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

    </>
  )
}

export default App
