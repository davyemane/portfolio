import React from 'react';
import './App.css';
import './animations.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} EMANE BILE Felicien Davy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
