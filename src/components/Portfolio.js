import React, { useState } from 'react';

const Portfolio = () => {
  const [slide, setSlide] = useState(false)

  const slideDown = () => {
    setSlide(!slide);
  }

  return (
    <div className="portfolio">
      <div 
        onClick={slideDown} 
        className={slide ? "portfolio__background-button z-top" : "portfolio__background-button"}
      >
      </div>
        <div className="portfolio__background-wrapper">
          <div 
            id="portfolio__background" 
            className={slide ? "portfolio__background slide" : "portfolio__background"}
            >
            <span className="label">portfolio</span>
              <div className={slide ? "portfolio__content fadeIn" : "portfolio__content"}>
                <h1>Portfolio</h1>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;