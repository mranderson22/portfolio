import React from 'react';
import githubLogo from '../../images/github-logo.png';
import linkedInLogo from '../../images/linkedin.png';
import logo from '../../images/logo_symbol_black.png';
import upArrow from '../../images/upArrow.png';

const Footer = ({scroll}) => (
  <footer className="footer">
    <div className="upArrow" onClick={() => scroll('home')}>
      <img className="upArrow__image" src={upArrow} />
    </div>
    <div className="footer__content">
      <h3>Designed and built by Eric Anderson &copy; 2019</h3>
      <div className="footer__iconBank">
        <a href="https://github.com/mranderson22" target="_blank" rel="noopener noreferrer">
          <img className="footer__iconBank-icon" src={githubLogo} />
        </a>
        <a href="https://linkedin.com/in/eric-anderson-5b20a5184/" target="_blank" rel="noopener noreferrer">
          <img className="footer__iconBank-icon" src={linkedInLogo} />
        </a>
      </div>
    </div>
  </footer>
)



export {Footer as default}