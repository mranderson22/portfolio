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
        <span className="label">contact</span>
          <div className={slide ? "contact__content fadeIn" : "contact__content"}>
            <div className="contact__form">
              <form action="#" className="form" id="contact__form">
              <h1 className="form__header">
                Contact me!
              </h1>
              <h3>email: anderson.eda@gmail.com</h3>
              <h3>phone: 803-528-9762</h3>
              <h1 className="form__header">
                Message me!
              </h1>
              <div className="form__group">
                <input type="text" className="form__input" placeholder="Full Name" id="name" />
              </div>
              <div className="form__group">
                <input type="email" className="form__input" placeholder="Email Address" id="email" />
              </div>
              <div className="form__group">
                <textarea className="form__input" rows="8" resize="none" form="contact__form" placeholder="Message" />
              </div>
              <input type="submit" />
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
};

export default Contact;