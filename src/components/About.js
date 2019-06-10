import React, { useState } from 'react';

const about = () => {
  const [slide, setSlide] = useState(false)

  const slideDown = () => {
    setSlide(!slide);
  }

  return (
    <div className="about">
      <div 
        onClick={slideDown} 
        className={slide ? "about__background-button z-top" : "about__background-button"}
      >
      </div>
        <div className="about__background-wrapper">
          <div 
            id="about__background" 
            className={slide ? "about__background slide" : "about__background"}
            >
            <div className="label__wrapper">
              <span className="label">about</span>
            </div>
            <div className={slide ? "content fadeIn" : "content"}>
              <div className="content__header">
                <h1>about</h1>
              </div>
              <div className="content__body">
              <div className="content-body-title"></div>
              </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default about;