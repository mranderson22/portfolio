import React from 'react';
import logo from '../../images/logo_symbol_black.png';
import typingVideo from '../../images/For_Wes.mp4';

const Header = () => {

  return (
    <header className="header">
      <div>
        <video className="video" autoPlay muted loop>
          <source className="video__content" src={typingVideo} type="video/mp4" />
        </video>
      </div>
      <div className="header__image-wrapper">
        <img src={logo} className="logoSymbol"></img>
      </div>
      <div className="header__main" data-aos="zoom-in">
        <span className="header__main-1">Hello! I'm <span className="highlighted">Eric Anderson</span>.</span>
        <span className="header__main-2">I'm a front-end web developer.</span>
      </div>
      <div data-aos="fade-up" data-aos-delay="250">
        <a href="#work" className="downButton">
          View my work &darr;
        </a>
      </div>
    </header>
  )
};

export default Header;