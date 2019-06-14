import React from 'react';
import portrait from '../../images/portrait2.png';

const about = () => {

  return (
    <div className="about">
    <div className="content">
          <div className="content__body-project">
            <span className="content__section-title" id="about">About</span>
            <div className="portrait">
              <div className="portrait__wrapper">
                <figure className="portrait__wrapper-fig">
                  <img src={portrait} className="portrait__image"></img>
                </figure>
                <p className="portrait__message">Welcome! A little about me... I'm a self-taught programmer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis posuere morbi. Ac turpis egestas sed tempus. Purus gravida quis blandit turpis cursus in hac habitasse. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Egestas integer eget aliquet nibh praesent tristique. Fringilla phasellus faucibus scelerisque eleifend donec. Egestas dui id ornare arcu odio ut. Purus non enim praesent elementum facilisis leo vel fringilla. Lorem mollis aliquam ut porttitor leo a diam. Odio euismod lacinia at quis risus. Tristique sollicitudin nibh sit amet commodo nulla. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default about;