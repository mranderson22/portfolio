import React from 'react';
import icon from '../../images/logo_symbol_black_small.png';
import ScrollspyNav from 'react-scrollspy-nav';

const Navbar = ({scroll}) => {

  return (
    <ScrollspyNav
      scrollTargetIds={[ "home", "workNav", "aboutNav", "contactNav" ]}
      activeNavClass="active"
    >
      <div className="navBar" id="nav">
        <div className="homeIcon" onClick={() => scroll('home')}>
          <img src={icon} className="logoSymbol"/>
          <a href="#home" className="disable">
            <div className="homeIcon__name">
              <span>Eric Anderson</span>
              <span>Front-end developer</span>
            </div>
          </a>
        </div>
        <div className="rightBank">
          <div className="navBar__button" onClick={() => scroll('work')}>
            <span className="navBar__button-icon"><a href="#workNav" className="disable">work</a></span>
          </div>
          <div className="navBar__button" onClick={() => scroll('about')}>
            <span className="navBar__button-icon"><a href="#aboutNav" className="disable">about</a></span>
          </div>
          <div className="navBar__button" onClick={() => scroll('contact')}>
            <span className="navBar__button-icon"><a href="#contactNav" className="disable">contact</a></span>
          </div>
        </div>
      </div>
    </ScrollspyNav>
  )
}

export { Navbar as default }