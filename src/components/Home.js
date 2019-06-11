import React from 'react';
import Header from './Header';
import Work from './Work';
import Resume from './Resume';
import About from './About';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Work />
        <About />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}


export default Home;