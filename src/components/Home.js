import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Home = () => {
  return (
    <div className="home__wrapper">
      <Header />
      <Portfolio />
      <Contact />
      <Resume />
      <div className="home__content-wrapper">
        <div className="home__content">
          <h1 className="home__content-title">Hello! My name is Eric Anderson</h1>
          <h3 className="home__content-description">Let's work together.</h3>
        </div>
      </div>
    </div>
  );
}


export default Home;