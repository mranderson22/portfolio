import React, { useState } from 'react';

const Contact = () => {
  const [position, setPosition] = useState({ slide: false })

  const slideDown = () => {
    setPosition(!position);
    const portfolio = document.getElementById('portfolio__background');
    const resume = document.getElementById('resume__background');
    portfolio.classList.remove('slide');
    resume.classList.remove('slide');
  }

return(
  <div className="contact">
    <div onClick={slideDown} className="contact__background-button">&nbsp;</div>
      <div className="contact__background-wrapper">
      <div 
        id="contact__background" 
        className={position ? "contact__background" : "contact__background slide"}
        >
        <div className="contact__content">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Contact;