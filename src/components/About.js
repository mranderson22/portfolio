import React from 'react';
import logo from '../../images/logo_symbol.png';

const about = () => {

  return (
    <div className="about">
    <div className="content">
        <div className="content__body">
          <div className="content__body-project" id="about">
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
    </div>
  );
}

export default about;