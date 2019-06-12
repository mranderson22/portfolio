import React from 'react';
import mockups from '../../images/mockups.png';

const work = () => {

  return (
    <div className="work">
      <div className="content">
        <div className="content__body">
          <div className="content__body-project">
            <span className="content__section-title" id="work">Projects</span>
            <div className="content__body-imageBank">
              <img src={mockups} className="content__body-imageBank-image"></img>
            </div>
            <div className="content__body-header">
              <span className="content__body-header-title">
                Should I Check My Crypto?
              </span>
              <span className="content__body-header-sub">
                At-A-Glance cryptocurrency tracker
              </span>
              <span className="content__body-header-description">
                Inspired by a downturn in the crypto market at the beginning of 2018. Checking those charts was bumming me out! Luckily this web-app will let you know up front if you should be checking your assets, or maybe spending time doing something else (Like learning how to code!) With this site you can analyze any of the top 100 crypto assets and compare them with side by side charts and historical data.
              </span>
            </div>
            <div className="devIcons">
              <i className="devicon-heroku-original devIcons__icon"></i>
              <i className="devicon-react-original devIcons__icon"></i>
              <i className="devicon-sass-original devIcons__icon"></i>
              <i className="devicon-html5-plain devIcons__icon"></i>
              <i className="devicon-webpack-plain devIcons__icon"></i>
              <i className="devicon-babel-plain devIcons__icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default work;