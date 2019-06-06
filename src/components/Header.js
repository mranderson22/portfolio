import React from 'react';
import logo from '../../images/logo_symbol_black.png';

const Header = () => {
  const slideDown = () => {
    const portfolio = document.getElementById('portfolio__background');
    const contact = document.getElementById('contact__background');
    const resume = document.getElementById('resume__background');
    portfolio.classList.remove('slide');
    contact.classList.remove('slide');
    resume.classList.remove('slide');
  }

  return (
    <header onClick={slideDown} className="header__wrapper">
      <div className="header">
        <div className="header__image-wrapper">
          <img src={logo} className="logoSymbol"></img>
        </div>
      </div>
    </header>
  )
};

export default Header;