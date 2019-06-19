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

  const popup = () => {
    const resume = document.getElementById('resume');

    resume.classList.toggle('reveal');
  }

  return (
    <div>
      <Navbar scroll={scroll} popup={popup}/>
      <Header scroll={scroll}/>
      <main>
        <Work />
        <About />
        <Resume popup={popup}/>
      </main>
      <Footer scroll={scroll} />
    </div>
  );
}


export default Home;