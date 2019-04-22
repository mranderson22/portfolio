import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/portfolio.scss';

const Portfolio = (props) => {
  return (
    <div className="portfolioItemWrapper">
        <Link to="/portfolio/1">Item 1{props.match.params.id}</Link>
        <Link to="/portfolio/2">Item 2{props.match.params.id}</Link>
        <Link to="/portfolio/3">Item 3{props.match.params.id}</Link>
    </div>
  );
}

export default Portfolio;