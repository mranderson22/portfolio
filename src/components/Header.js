import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
    <NavLink exact to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    <NavLink to="/resume" activeClassName="is-active">Resume</NavLink>
  </header>
);

export default Header;