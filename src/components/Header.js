import React from 'react';
import logo from '../../images/logo_symbol_black.png';

const Header = () => {

  return (
    <header className="header">
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