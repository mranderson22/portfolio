import React from 'react';
import mockups from '../../images/mockups.png';

const work = () => {

  return (
    <div className="work">
      <div className="content">
        <div className="content__body">
          <div className="content__body-project">
            <div className="content__body-imageBank">
              <img src={mockups} className="content__body-imageBank-image" id="work"></img>
            </div>
            <div className="content__body-header">
              <span className="content__body-header-title">
                Should I Check My Crypto?
              </span>
              <span className="content__body-header-sub">
                At-A-Glance cryptocurrency tracker
              </span>
              <span className="content__body-header-description">
                Get a heads up when the market turns! Check any of the top 100 crypto assets and compare them with side by side charts and historical data
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default work;