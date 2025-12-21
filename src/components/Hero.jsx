import React from 'react';
import { FaDownload, FaEye, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/data';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="animate-fade-in-down">{personalInfo.name}</h1>
        <p className="role animate-fade-in-up delay-200">{personalInfo.role}</p>
        <p className="tagline animate-fade-in-up delay-400">{personalInfo.tagline}</p>
        <div className="hero-buttons animate-fade-in-up delay-600">
          <button
            className="btn btn-primary hover-lift"
            onClick={() => scrollToSection('projects')}
          >
            <FaEye /> View Projects
          </button>
          <a
            href={personalInfo.cvUrl}
            className="btn btn-secondary hover-lift"
            download
          >
            <FaDownload /> Download CV
          </a>
          <button
            className="btn btn-secondary hover-lift"
            onClick={() => scrollToSection('contact')}
          >
            <FaEnvelope /> Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
