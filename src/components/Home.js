import React from 'react';
import Header from './Header';
import Work from './Work';
import Resume from './Resume';
import About from './About';
import Footer from './Footer';
import Navbar from './Navbar';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {

  const scroll = (pos) => {
    document.getElementById(pos).scrollIntoView({
      behavior: 'smooth'
    })
  }

  let scrollPosition = window.scrollY;

  window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
    const nav = document.getElementById('nav');

    if (scrollPosition > 700) {
      nav.classList.add('bg');
    } else {
      nav.classList.remove('bg');
    }
  })

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