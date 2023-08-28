import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtomPages from './pages/atomsPages'
import MoleculesPages from './pages/MoleculesPages';
import OrganimsPages from './pages/OrganimsPages';
import Home from './pages/Home';
import './sass/main.scss'
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
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
import EjemploAtomicRB from './pages/EjemploAtomicRB';
import Extensiones from './pages/Extensiones';
import Librerias from './pages/Librerias';
import SassPage from './pages/SassPage';
import BemPage from './pages/BemPage';
import Newsidebar from './component/organims/Sidebar/Newsidebar';

function App() {
  const [isModulo1Open, setModulo1Open] = useState(false);
  const [isModulo2Open, setModulo2Open] = useState(false);
  const [isModulo3Open, setModulo3Open] = useState(false);

    const toggleModulo1 = () => {
      setModulo1Open(true);
      setModulo2Open(false);
      setModulo3Open(false);
    };

  const toggleModulo2 = () => {
    setModulo1Open(false);
    setModulo2Open(true);
    setModulo3Open(false);
  };

  const toggleModulo3 = () => {
    setModulo1Open(false);
    setModulo2Open(false);
    setModulo3Open(true);
  };
  const location = useLocation();
  return (
    <>
      <NavbarSite 
              toggleModulo1={toggleModulo1}
              toggleModulo2={toggleModulo2}
              toggleModulo3={toggleModulo3}
              location={location}
      />
      {location.pathname === '/' ?
      (<Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      ) :
      (
        <div className="d-flex" id="wrapper">
                <Newsidebar 
                  isModulo1Open={isModulo1Open}
                  isModulo2Open={isModulo2Open}
                  isModulo3Open={isModulo3Open}
                  toggleModulo1={toggleModulo1}
                  toggleModulo2={toggleModulo2}
                  toggleModulo3={toggleModulo3}
                  location={location}
                />
        <Routes>
          <Route path='/modulo1/gitPages' element={<GitPage />} />
          <Route path='/modulo1/console' element={<Console />} />
          <Route path='/modulo1/reactVite' element={<ReactPage />} />
          <Route path='/modulo2/introBoostrap' element={<IntroBootstrapPages />} />
          <Route path='/modulo2/atomicDesign' element={<AtomicDesign />} />
          <Route path='/modulo2/atomicReactbootstrap' element={<EjemploAtomicRB />} />
          <Route path='/modulo3/bemsass' element={<BemSass />} />
          <Route path='/modulo2/extensiones' element={<Extensiones />} />
          <Route path='/modulo3/librerias' element={<Librerias />} />
          <Route path='/modulo3/Sass' element={<SassPage />} />
          <Route path='/modulo3/BEM' element={<BemPage />} />
        </Routes>
        </div>
      )
    
    }
      
   
      <FooterSite />
    
    </>
  )
}

export default App
