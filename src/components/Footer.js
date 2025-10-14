import React from 'react';
import './Footer.css'; // Assuming the CSS is stored here
import logo from '../assets/images/melaloncha_face_illustration.png'; // Path to your footer image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#!">Maps</a>
        <a href="#!">Keys</a>
        <a href="#!">Taxa</a>
        <a href="#!">Projects</a>
        <a href="#!">People</a>
        <a href='#!'>About</a>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Footer Logo" />
      </div>
      <div className="footer-bottom">
        <div className="footer-text">phorid.net 2025</div>
        <div className="social-links">
          {/* Placeholder icons, replace with actual icons */}
          <a href="#!"><i className="icon-x"></i></a>
          <a href="#!"><i className="icon-youtube"></i></a>
          <a href="#!"><i className="icon-linkedin"></i></a>
          <a href="#!"><i className="icon-github"></i></a>
          <a href="#!"><i className="icon-instagram"></i></a>
          <a href="#!"><i className="icon-bluesky"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;