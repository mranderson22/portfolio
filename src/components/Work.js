import React, { useState } from 'react';

const work = () => {
  const [slide, setSlide] = useState(false)

  const slideDown = () => {
    setSlide(!slide);
  }

  return (
    <div className="work">
      <div 
        onClick={slideDown} 
        className={slide ? "work__background-button z-top" : "work__background-button"}
      >
      </div>
        <div className="work__background-wrapper">
          <div 
            id="work__background" 
            className={slide ? "work__background slide" : "work__background"}
            >
            <div className="label__wrapper">
              <span className="label">work</span>
            </div>
              <div className={slide ? "work__content fadeIn" : "work__content"}>
                <h1>work</h1>
              </div>
          </div>
        </div>
    </div>
  );
}

export default work;