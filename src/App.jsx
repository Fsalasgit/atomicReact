import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtomPages from './pages/atomsPages'
import MoleculesPages from './pages/MoleculesPages';
import OrganimsPages from './pages/OrganimsPages';
import Home from './pages/Home';
import './sass/main.scss'
import { Routes, Route, useLocation } from 'react-router-dom';
import TemplatePage from './pages/TemplatePage';
import NavbarSite from './component/webComponents/NavbarSite';
import FooterSite from './component/webComponents/footerSite';
import Sidebar from './component/organims/Sidebar/Sidebar';
import Console from './pages/Console';
import GitPage from './pages/gitPage';
import ReactPage from './pages/ReactPage';
import IntroBootstrapPages from './pages/IntroBootstrapPages';
import AtomicDesign from './pages/AtomicDesign';
import BemSass from './pages/BemSass';

function App() {
  const location = useLocation();
  return (
    <>
      <NavbarSite />
      {location.pathname === '/' ?
      (<Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      ) :
      (
        <div className="d-flex" id="wrapper">
        <Sidebar />      
        <Routes>
          <Route path='/gitPages' element={<GitPage />} />
          <Route path='/console' element={<Console />} />
          <Route path='/reactVite' element={<ReactPage />} />
          <Route path='/introBootrapt' element={<IntroBootstrapPages />} />
          <Route path='/atomicDesign' element={<AtomicDesign />} />
          <Route path='/bemsass' element={<BemSass />} />
        </Routes>
        </div>
      )
    
    }
      
   
      <FooterSite />
    
    </>
  )
}

export default App
