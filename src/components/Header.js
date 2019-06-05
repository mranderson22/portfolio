import React from 'react';
import logo from '../../images/logo_symbol_black.png';

const Header = () => (
  <header className="header__wrapper">
    <div className="header">
      <img src={logo} className="logoSymbol"></img>
    </div>
  </header>
);

export default Header;