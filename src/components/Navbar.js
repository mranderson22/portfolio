import React from 'react';
import icon from '../../images/logo_symbol_black_small.png';

const Navbar = ({scroll, popup}) => {

  return (
    <div>
      <div className="navBar" id="nav">
        <div className="homeIcon">
          <img src={icon} className="logoSymbol" onClick={() => scroll('home')}/>
        </div>
        <div className="rightBank">
          <div className="navBar__button" onClick={() => scroll('work')}>
            <span className="navBar__button-icon">work</span>
          </div>
          <div className="navBar__button" onClick={() => scroll('about')}>
            <span className="navBar__button-icon">about</span>
          </div>
          <div className="navBar__button" onClick={popup}>
            <span className="navBar__button-icon">resume</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Navbar as default }