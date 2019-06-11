import React from 'react';
import icon from '../../images/logo_symbol_black_small.png';

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navBar__button">
        <a href="#work"><img className="navBar__button-icon" src={icon} /></a>
      </div>
      <div className="navBar__button">
        <a href="#about"><img className="navBar__button-icon" src={icon} /></a>
      </div>
      <div className="navBar__button">
        <a href="#resume"><img className="navBar__button-icon" src={icon} /></a>
      </div>
    </div>
  )
}

export { Navbar as default }