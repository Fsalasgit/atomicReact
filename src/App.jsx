import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtomPages from './pages/atomsPages'
import './sass/main.scss'
import { Routes, Route } from 'react-router-dom';






function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<AtomPages />} />
      </Routes>
    
      

    </>
  )
}

export default App
