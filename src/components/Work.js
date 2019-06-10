import React, { useState } from 'react';
import logo from '../../images/logo_symbol.png';

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
            {slide && (
              <div className={slide ? "content fadeIn" : "content"}>
                <div className="content__header">
                  <h1 className="content__header-title">work</h1>
                </div>
                <div className="content__body">
                  <div className="content__body-project">
                    <div className="content__body-imageBank">
                      <img src={logo} className="content__body-imageBank-image"></img>
                    </div>
                    <div className="content__body-title">
                      <h1>Should I Check My Crypto?</h1>
                      <h3>At-A-Glance cryptocurrency tracker</h3>
                      <p>Get a heads up when the market turns! Check any of the top 100 crypto assets and compare them with side by side charts and historical data</p>
                    </div>
                  </div>
                  <div className="content__body-project">
                    <div className="content__body-imageBank">
                      <img src={logo} className="content__body-imageBank-image"></img>
                    </div>
                    <div className="content__body-title">
                      <h1>Should I Check My Crypto?</h1>
                      <h3>At-A-Glance cryptocurrency tracker</h3>
                      <p>Get a heads up when the market turns! Check any of the top 100 crypto assets and compare them with side by side charts and historical data</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}

export default work;