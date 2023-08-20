import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtomPages from './pages/atomsPages'
import MoleculesPages from './pages/MoleculesPages';
import OrganimsPages from './pages/OrganimsPages';
import './sass/main.scss'
import { Routes, Route } from 'react-router-dom';







function App() {


  return (
    <>

      <Routes>
        <Route path='/Atoms' element={<AtomPages />} />
        <Route path='/molecules' element={<MoleculesPages />} />
        <Route path='/organims' element={<OrganimsPages />} />
      </Routes>
    
      

    </>
  )
}

export default App
