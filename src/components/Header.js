import React from 'react';
import logo from '../../images/logo_symbol_black.png';

const Header = () => (
  <header className="header">
    <img src={logo} className="logoSymbol"></img>
    <div className="header__content">
      <h1 className="header__content-title">Hello! My name is Eric Anderson</h1>
      <h3 className="header__content-description">Let's work together.</h3>
    </div>
  </header>
);

export default Header;