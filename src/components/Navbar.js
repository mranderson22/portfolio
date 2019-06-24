import React from 'react';
import icon from '../../images/logo_symbol_black_small.png';

const Navbar = ({scroll}) => {

  return (
    <div>
      <div className="navBar" id="nav">
        <div className="homeIcon" onClick={() => scroll('home')}>
          <img src={icon} className="logoSymbol"/>
          <div className="homeIcon__name">
            <span>Eric Anderson</span>
            <span>Front-end developer</span>
          </div>
        </div>
        <div className="rightBank">
          <div className="navBar__button" onClick={() => scroll('work')}>
            <span className="navBar__button-icon">work</span>
          </div>
          <div className="navBar__button" onClick={() => scroll('about')}>
            <span className="navBar__button-icon">about</span>
          </div>
          <div className="navBar__button" onClick={() => scroll('contact')}>
            <span className="navBar__button-icon">contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Navbar as default }