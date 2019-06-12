import React from 'react';
import logo from '../../images/logo_symbol.png';

const about = () => {

  return (
    <div className="about">
    <div className="content">
        <div className="content__body">
          <div className="content__body-project">
            <span className="content__section-title" id="work">About</span>
            <div className="content__body-imageBank">
              <img src={logo} className="content__body-imageBank-image" id="about"></img>
            </div>
            <div className="content__body-header">
              <h1>Should I Check My Crypto?</h1>
              <h3>At-A-Glance cryptocurrency tracker</h3>
              <p>Get a heads up when the market turns! Check any of the top 100 crypto assets and compare them with side by side charts and historical data</p>
            </div>
            <div className="content__body-imageBank">
              <img src={logo} className="content__body-imageBank-image"></img>
            </div>
            <div className="content__body-header">
              <h1>Should I Check My Crypto?</h1>
              <h3>At-A-Glance cryptocurrency tracker</h3>
              <p>Inspired by a downturn in the crypto market at the beginning of 2018. Checking those charts was bumming me out! Luckily this web-app will let you know up front if you should be checking your coins or maybe spending time doing something else (Like learning how to code!) With this site you can analyze any of the top 100 crypto assets and compare them with side by side charts and historical data. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;