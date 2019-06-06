import React, { useState } from 'react';
import resume from '../../images/resume.pdf';

const Resume = () => {
  const [slide, setSlide] = useState(false)

  const slideDown = () => {
    setSlide(!slide);
  }

  return (
    <div className="resume">
      <div 
        onClick={slideDown} 
        className={slide ? "resume__background-button z-top" : "resume__background-button"}>
        &nbsp;
      </div>
        <div className="resume__background-wrapper">
        <div 
          id="resume__background" 
          className={slide ? "resume__background slide" : "resume__background"}
          >
          <span className="label">resume</span>
          {slide && (
            <div className="resume__content">
              <div className="resumeWrapper">
                <object data={resume} className="resumeObject" type="application/pdf" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;