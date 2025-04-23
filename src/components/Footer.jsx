import React from 'react';
import './Footer.css';
import logo from '../assets/tc-logo.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src={logo} alt="Technical Chowkidar" className="footer-logo" />
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column">
          <h4>CONNECT</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>

        <div className="footer-column">
          <h4>GET IN TOUCH</h4>
          <a href="mailto:technicalchowkidar@gmail.com">technicalchowkidar@gmail.com</a>
          <a href="tel:+911234567890">+91 12345 67890</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Technical Chowkidar 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
