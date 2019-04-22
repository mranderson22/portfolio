import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo_symbol.png';
import '../styles/components/header.scss';

const Header = () => (
  <header className="headerWrapper">
    <NavLink exact to="/" activeClassName="is-active">
      <img className="navbarLogo" src={logo} />
    </NavLink>
    <NavLink exact to="/portfolio" activeClassName="is-active" className="navLink">Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active" className="navLink">Contact</NavLink>
    <NavLink to="/resume" activeClassName="is-active" className="navLink">Resume</NavLink>
  </header>
);

export default Header;