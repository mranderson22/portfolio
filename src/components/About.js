import React from 'react';
import portrait from '../../images/portrait2.png';
import Graph from './Graph';

const about = () => {

  return (
    <div className="about">
    <div className="content">
          <div className="content__body-project">
            <span className="content__section-title" id="about">About</span>
            <div className="portrait">
              <img src={portrait} className="portrait__image"></img>
              <p className="portrait__message">A little about me...

              I've been building computers since i was 8 years old. I got in trouble for loading DOOM via floppy onto all of the pc's in my elementary school.
              I decided to teach myself how to code after watching my wife become an accomplished full-stack engineer. I fell in love with coding when
              I pushed my first web-app live and actually made use of it. I love that there is so much to learn and I've only grazed the surface.    </p>
            </div>
            <div className="devIcons-wrapper">
              <span className="devIcons-title">What I enjoy working with: </span>
              <div className="devIcons" data-aos="fade">
                <i className="devicon-react-original devIcons__icon" data-aos="fade-left" data-aos-delay="50"></i>
                <i className="devicon-sass-original devIcons__icon" data-aos="fade-left" data-aos-delay="100"></i>
                <i className="devicon-html5-plain devIcons__icon" data-aos="fade-left" data-aos-delay="150"></i>
                <i className="devicon-webpack-plain devIcons__icon" data-aos="fade-left" data-aos-delay="200"></i>
                <i className="devicon-babel-plain devIcons__icon" data-aos="fade-left" data-aos-delay="250"></i>
                <i className="devicon-git-plain devIcons__icon" data-aos="fade-left" data-aos-delay="300"></i>
                <i className="devicon-heroku-original devIcons__icon" data-aos="fade-left" data-aos-delay="350"></i>
                <i className="devicon-javascript-plain devIcons__icon" data-aos="fade-left" data-aos-delay="400"></i>
                <i className="devicon-photoshop-plain devIcons__icon" data-aos="fade-left" data-aos-delay="450"></i>
                <i className="devicon-illustrator-plain devIcons__icon" data-aos="fade-left" data-aos-delay="500"></i>
                <i className="devicon-windows8-original devIcons__icon" data-aos="fade-left" data-aos-delay="550"></i>
                <i className="devicon-apple-original devIcons__icon" data-aos="fade-left" data-aos-delay="600"></i>
                <i className="devicon-ubuntu-plain devIcons__icon" data-aos="fade-left" data-aos-delay="650"></i>
              </div>
            </div>
            <div className="attributes__wrapper">
              <div className="attributes__left">
                <span className="attributes__title">Hobbies:</span>
                <ul className="attributes__hobbies">
                  <li><span>3D Printing</span> - PLA / DnD minis </li>
                  <li><span>3D Modeling</span> - Autodesk Maya / Sci-Fi tech </li>
                  <li><span>PC Building</span> - Nvidia / 144hz 1440p </li>
                  <li><span>PC Gaming</span> - Dota / Apex / Rocket League</li>
                  <li><span>Star wars</span> - ESB / ANH / TFA / RO / ROTS / ROTJ / The rest </li>
                  <li><span>Mechanical keyboards</span> - HHKB / Cherry MX Brown</li>
                </ul>
              </div>
              <div className="attributes__right">
                <Graph />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default about;