import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtomPages from './pages/atomsPages'
import MoleculesPages from './pages/MoleculesPages';
import OrganimsPages from './pages/OrganimsPages';
import Home from './pages/Home';
import './sass/main.scss'
import { Routes, Route } from 'react-router-dom';
import TemplatePage from './pages/TemplatePage';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/Atoms' element={<AtomPages />} />
        <Route path='/molecules' element={<MoleculesPages />} />
        <Route path='/organims' element={<OrganimsPages />} />
        <Route path='/template' element={<TemplatePage />} />
      </Routes>
    
      

    </>
  )
}

export default App
