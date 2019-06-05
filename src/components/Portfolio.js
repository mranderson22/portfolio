import React, { useState } from 'react';

const Portfolio = () => {
  const [position, setPosition] = useState({ slide: false })

  const slideDown = () => {
    setPosition(!position);
    const contact = document.getElementById('contact__background');
    const resume = document.getElementById('resume__background');
    contact.classList.remove('slide');
    resume.classList.remove('slide');
  }

  return (
    <div className="portfolio">
      <div onClick={slideDown} className="portfolio__background-button">&nbsp;</div>
        <div className="portfolio__background-wrapper">
          <div 
            id="portfolio__background" 
            className={position ? "portfolio__background" : "portfolio__background slide"}
            >
            <div className="portfolio__content">
              <h1>Portfolio</h1>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;