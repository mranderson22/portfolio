import React from 'react';
import logo from '../../images/logo_symbol_black.png';

const Header = () => {

  return (
    <header className="header__wrapper">
      <div className="header">
        <div className="header__image-wrapper">
          <img src={logo} className="logoSymbol"></img>
        </div>
      </div>
    </header>
  )
};

export default Header;