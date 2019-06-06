import React, { useState } from 'react';
import resume from '../../images/resume.pdf';

const Resume = () => {
  const [slide, setSlide] = useState(false)

  const slideDown = () => {
    setSlide(!slide);
    const portfolio = document.getElementById('portfolio__background');
    const contact = document.getElementById('contact__background');
    portfolio.classList.remove('slide');
    contact.classList.remove('slide');
  }

  return (
    <div className="resume">
      <div onClick={slideDown} className="resume__background-button">&nbsp;</div>
        <div className="resume__background-wrapper">
        <div 
          id="resume__background" 
          className={slide ? "resume__background slide" : "resume__background"}
          >
          {slide && (
            <div className="resume__content">
              <h1>Resume</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;