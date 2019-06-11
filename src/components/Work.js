import React from 'react';
import macbook from '../../images/macbook.png';
import phone from '../../images/phone.png';

const work = () => {

  return (
    <div className="work">
      <div className="content">
        <div className="content__body">
          <div className="content__body-project" id="work">
            <div className="content__body-imageBank">
              <img src={macbook} className="content__body-imageBank-image"></img>
              {/*
                <img src={phone} className="content__body-imageBank-imageFloating"></img>
               */}
            </div>
            <div className="content__body-header">
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

export default work;