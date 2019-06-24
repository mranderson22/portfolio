import React from 'react';
import typingVideo from '../../images/For_Wes.mp4';

const Header = ({scroll}) => {

  return (
    <header className="header" id="home">
      <div>
        <video className="video" autoPlay muted loop>
          <source className="video__content" src={typingVideo} type="video/mp4" />
        </video>
      </div>
      <div className="header__main" data-aos="zoom-in" data-aos-mirror="true">
        <span className="header__main-1">Welcome! I'm <span className="highlighted">Eric Anderson</span>.</span>
        <span className="header__main-2">I'm a highly motivated, self-taught front-end developer based in Charlotte, NC.</span>
      </div>
      <div data-aos="fade-up" data-aos-delay="250" data-aos-mirror="true">
        <div className="btn" onClick={() => scroll('work')}>
          Let's start with projects &darr;
        </div>
      </div>
    </header>
  )
};

export default Header;