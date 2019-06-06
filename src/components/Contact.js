import React, { useState } from 'react';

const Contact = () => {
  const [slide, setSlide] = useState(false)

  const slideDown = () => {
    setSlide(!slide);
  }

return(
  <div className="contact">
    <div 
      onClick={slideDown} 
      className={slide ? "contact__background-button z-top" : "contact__background-button"}>
      &nbsp;
    </div>
      <div className="contact__background-wrapper">
      <div 
        id="contact__background" 
        className={slide ? "contact__background slide" : "contact__background"}
        >
        <span className="contact__label">contact</span>
        {slide && (
          <div className="contact__content">
            <h1>Contact</h1>
          </div>
        )}
      </div>
    </div>
  </div>
  )
};

export default Contact;