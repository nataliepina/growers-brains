import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faLinkedin, faInstagram, faTwitter, faYoutube
} from "@fortawesome/free-brands-svg-icons";
import './style.scss';

export default () => (
  <section id="footer">
    <div className="container">
      <div className="top">
        <p className="contactText">Contact</p>
        <div className="contactInfo">
          <p className="phone">+1-234-567-8900</p>
          <p className="email">info@growersbrains.com</p>
        </div>
        <p className="title">Growers Brains</p>
        <button className="contact">Contact Us</button>
      </div>
      <div className="h-line" />
      <div className="bottom">
        <div className="bottomLeft">
          <ul className="footerList">
            <li><button href="#">Help</button></li>
            <li><button href="#">Terms</button></li>
            <li><button href="#">Privacy Policy</button></li>
          </ul>
          <p className="copyright"><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2020 Growers Brains</p>
        </div>
        <div className="socialIcons">
          <ul>
            <li><button><FontAwesomeIcon icon={faFacebook} size="lg" /></button></li>
            <li><button><FontAwesomeIcon icon={faLinkedin} size="lg" /></button></li>
            <li><button><FontAwesomeIcon icon={faTwitter} size="lg" /></button></li>
            <li><button><FontAwesomeIcon icon={faYoutube} size="lg" /></button></li>
            <li><button><FontAwesomeIcon icon={faInstagram} size="lg" /></button></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
