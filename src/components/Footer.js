import React from 'react';
import githubLogo from '../../images/github-logo.png';
import linkedInLogo from '../../images/linkedin.png';
import logo from '../../images/logo_symbol_black.png';

const Footer = () => (
  <div className="footer">
    <div className="footer__left">
      <div className="footer__left-content">
        <h3>Designed and built by Eric Anderson</h3>
          <h3>eric-anderson.io © 2019 Eric Anderson</h3>
        <img className="footer__logo" src={logo} />
      </div>
    </div>
    <div className="footer__right">
      <div className="footer__right-content">
        <h3>803-528-9762</h3>
        <h3>anderson.eda@gmail.com</h3>
        <a href="https://github.com/mranderson22" target="_blank" rel="noopener noreferrer">
          <img className="footer__logo" src={githubLogo} />
        </a>
        <a href="https://linkedin.com/in/eric-anderson-5b20a5184/" target="_blank" rel="noopener noreferrer">
          <img className="footer__logo" src={linkedInLogo} />
        </a>
      </div>
    </div>
  </div>
)



export {Footer as default}