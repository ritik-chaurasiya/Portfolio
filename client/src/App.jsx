import React from 'react';
// import './style.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Education from './components/Education.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
