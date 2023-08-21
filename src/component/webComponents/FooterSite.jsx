import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterSite = () => {
  return (
    <>
      <footer className="container-fluid footer">
        <div className="row">
          <h4 className='footer__Text text-center'>Desarrolloda por </h4>
          <p className='footer__Text'>juan pablo Salomón<a href="https://github.com/pablopaul01" className='ms-2 footer__link' target='_black'><FaGithub/></a><a href="https://www.linkedin.com/in/juanpablosalomon/" className='ms-2 footer__link' target='_black'><FaLinkedin/></a></p>
          <p className='footer__Text'>Franco Salas<a href="https://github.com/Fsalasgit" className='ms-2 footer__link' target='_black'><FaGithub/></a><a href="https://www.linkedin.com/in/franco-exequiel-salas-bb639a208/" className='ms-2 footer__link' target='_black'><FaLinkedin/></a></p>
        </div>
      </footer>
    
    </>
  )
}

export default FooterSite