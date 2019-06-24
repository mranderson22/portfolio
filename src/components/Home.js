import React from 'react';
import Header from './Header';
import Work from './Work';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';
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
    document.body.classList.toggle('scrollbar')
    resume.classList.toggle('reveal');
  }

  return (
    <div>
      <Navbar scroll={scroll}/>
      <Header scroll={scroll}/>
      <main>
        <Work />
        <About popup={popup}/>
        <Resume popup={popup}/>
        <Contact />
      </main>
      <Footer scroll={scroll} />
    </div>
  );
}


export default Home;