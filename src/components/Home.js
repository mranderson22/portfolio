import React from 'react';
import Header from './Header';
import Work from './Work';
import Resume from './Resume';
import About from './About';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Work />
      <Resume />
      <About />
      <Footer />
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