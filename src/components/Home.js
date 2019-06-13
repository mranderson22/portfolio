import React from 'react';
import Header from './Header';
import Work from './Work';
import Resume from './Resume';
import About from './About';
import Footer from './Footer';
import Navbar from './Navbar';
import 'aos/dist/aos.css';

const Home = () => {

  const scroll = (pos) => {
    document.getElementById(pos).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Navbar scroll={scroll} />
      <Header scroll={scroll}/>
      <main>
        <Work />
        <About />
        <Resume />
      </main>
      <Footer scroll={scroll} />
    </div>
  );
}


export default Home;