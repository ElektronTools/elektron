import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faWhatsapp, faYoutube, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="col-md-6 text-center">
            <ul className="list-unstyled d-flex justify-content-center align-items-center" style={{ marginTop: '20px' }}>
              <li className="me-3"><a href="https://www.tiktok.com/@elektrontools?is_from_webapp=1&sender_device=pc" className="text-light"><FontAwesomeIcon icon={faTiktok} size="2x" /></a></li>
              <li className="me-3"><a href="https://wa.me/59169717553" className="text-light"><FontAwesomeIcon icon={faWhatsapp} size="2x" /></a></li>
              <li className="me-3"><a href="https://www.youtube.com/@Elektrontools" className="text-light"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
              <li className="me-3"><a href="https://www.facebook.com/profile.php?id=61557499266597&mibextid=ZbWKwL" className="text-light"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
              <li className="me-3"><a href="https://t.me/electrontools" className="text-light"><FontAwesomeIcon icon={faTelegram} size="2x" /></a></li>
            </ul>
          </div>
          <div className="col-md-6 text-center align-self-center">
            <p style={{ marginBottom: '1px' }}>© {new Date().getFullYear()} ElektronTools. Todos los derechos reservados.</p>
            <p style={{ marginBottom: '15px' }}>Developed by LAAT</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
