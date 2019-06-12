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
      <div className="header__main">
        <span className="header__main-1">Eric Anderson</span>
        <span className="header__main-2">Front-end developer</span>
      </div>
    </header>
  )
};

export default Header;