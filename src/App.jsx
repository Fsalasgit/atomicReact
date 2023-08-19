import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtomPages from './pages/atomsPages'
import MoleculesPages from './pages/MoleculesPages';
import './sass/main.scss'
import { Routes, Route } from 'react-router-dom';







function App() {


  return (
    <>

      <Routes>
        <Route path='/Atoms' element={<AtomPages />} />
        <Route path='/molecules' element={<MoleculesPages />} />
      </Routes>
    
      

    </>
  )
}

export default App
