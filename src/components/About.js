import React from 'react';
import portrait from '../../images/portrait2.png';

const about = () => {

  return (
    <div className="about">
    <div className="content">
          <div className="content__body-project">
            <span className="content__section-title" id="about">About</span>
            <div className="portrait">
              <img src={portrait} className="portrait__image"></img>
              <p className="portrait__message">Welcome! A little about me...

              Computers have always been a central part of my life ever since I was a kid building PC's with my father on our kitchen table.
              When it was time to figure out what to study in college, I knew it needed to be something in front of a screen. Thus the majority of my 
              formal education was centered around 3D Animation and Visual Effects. One of my favorite parts of 3D is the
              complexity of the software. I loved having so many tools at my fingertips and building things as efficiently as possible through my grasp of what the
              program (Autodesk Maya) could do.  While it was something I enjoyed and was very good at, after school
              I had an opportunity to live in NYC and run a cafe in Manhattan, and I took it. I got to meet thousands of interesting people,
              and have regulars like Alec Baldwin and Emma Stone! 
              
              I then met my future wife playing video games online (Call of Duty), and she moved to NYC after landing her first job as a full-stack developer.
              I credit her with opening my eyes to the programming world.
              I began to dabble with code after hours, more specifically I started teaching myself to use python + django, and 
              got a taste of the complexity that I loved about 3D, plus the power of being able to push something live
              to the web. This is something I could see myself really enjoying.
              
              As our priorities changed and we looked towards the future, we decided to move to North Carolina (the land of cheaper rent), where I would be able to take time off
              to learn to be a developer. And here we are!   </p>
            </div>
            <div className="about__icons-wrapper">
              <span className="about__icons-title">What I enjoy working with: </span>
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
          </div>
      </div>
    </div>
  );
}

export default about;