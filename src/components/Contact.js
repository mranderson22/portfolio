import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
      <div className="contact" id="contactNav">
        <div className="content">
          <div className="content__body-project">
          <span className="content__section-title" id="contact" data-aos="fade-right">Contact</span>
          <div className="sideBySide">
            <div className="contact__left">
              <span className="content__body-header-description">I'm currently looking for a position as a front-end 
              developer. If you are interested in working with me, feel
              free to contact me. I look forward to hearing from you!</span>
              <div className="contact__specifics">
              <div>
                <i className="fas fa-mobile-alt fa-2x"></i><span>803 528 9762</span>
              </div>
              <div>
                <i className="far fa-envelope fa-2x"></i><span>anderson.eda@gmail.com</span>
              </div>
              <div>
                <i className="fas fa-globe fa-2x"></i><span><a href="https://www.linkedin.com/in/eric-anderson-5b20a5184/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
              </div>
            </div>
            </div>
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