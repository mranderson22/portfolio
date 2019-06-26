import React from 'react';
import portrait from '../../images/portrait2.png';
import Graph from './Graph';

const about = ({popup}) => {

  return (
    <div className="about" id="aboutNav">
    <div className="content">
          <div className="content__body-project">
            <span className="content__section-title" id="about">About</span>
            <div className="portrait">
              <img src={portrait} className="portrait__image"></img>
              <p className="portrait__message">A little about me...

              I've been building computers since i was 8 years old. I got in trouble for loading DOOM via floppy onto all of the pc's in my elementary school.
              I decided to teach myself how to code after watching my wife become an accomplished full-stack engineer, and I fell in love with coding when
              I pushed my first web-app live and actually made use of it! I love that there is so much to learn and I've only grazed the surface.    </p>
              <p className="portrait__message">I ran a cafe in Manhattan for 8 years, and there's a strong possibility that I've met an actor from the last movie you watched. My wife and I spend our evenings
              playing competitive video games (which is actually how we met), and our house is a jungle due to our dog, 3 cats, and a recent fascination with house plants.</p>
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
                <i className="devicon-windows8-original devIcons__icon" data-aos="fade-left" data-aos-delay="500"></i>
                <i className="devicon-apple-original devIcons__icon" data-aos="fade-left" data-aos-delay="550"></i>
                <i className="devicon-trello-plain devIcons__icon" data-aos="fade-left" data-aos-delay="600"></i>
                <i className="devicon-slack-plain devIcons__icon" data-aos="fade-left" data-aos-delay="650"></i>
                <i className="devicon-visualstudio-plain devIcons__icon" data-aos="fade-left" data-aos-delay="700"></i>
              </div>
            </div>
            <div className="content__body-project-buttons">
                <a 
                href="https://github.com/mranderson22" 
                target="_blank" 
                className="btn"
                >
                  Github
                </a>
                <a
                href="#about"
                className="btn"
                >
                <span onClick={popup}>Resume</span>
                </a>
            </div>
            <div className="attributes__wrapper">
            <span className="attributes__title">Hobbies:</span>
              <div className="attributes__split">
                <ul className="attributes__hobbies">
                  <li><span>3D Printing</span> - PLA / DnD minis </li>
                  <li><span>3D Modeling</span> - Autodesk Maya / Sci-Fi tech </li>
                  <li><span>PC Building</span> - Nvidia / 144hz 1440p </li>
                  <li><span>PC Gaming</span> - Dota / Apex / Rocket League</li>
                </ul>
                <ul className="attributes__hobbies">
                  <li><span>Star wars</span> - ESB / ANH / TFA / RO / ROTS / ROTJ / The rest </li>
                  <li><span>Mechanical keyboards</span> - HHKB / Cherry MX Brown</li>
                  <li><span>Board Games</span> - Gloomhaven / Chaotic good</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default about;