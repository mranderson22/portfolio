import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
      <div className="contact" id="contactNav">
        <div className="content">
          <div className="content__body-project">
          <span className="content__section-title" id="contact">Contact</span>
          <div className="sideBySide">
            <span className="content__body-header-description">I'm currently looking for a position as a front-end 
            developer. If you are interested in working with me, feel
            free to contact me. I look forward to hearing from you!</span>
            <div className="contactForm__wrapper">
              <ContactForm />
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export {Contact as default}