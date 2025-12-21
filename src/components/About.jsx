import React from 'react';
import { FaCheckCircle, FaHeart } from 'react-icons/fa';
import { about, languages } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section id="about" className="section">
      <h2
        ref={titleRef}
        className={`section-title ${titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        About Me
      </h2>
      <div
        ref={gridRef}
        className={`about-grid ${gridVisible ? 'animate-fade-in-up delay-200' : 'animate-on-scroll'}`}
      >
        <div>
          <p className="about-description">{about.description}</p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--dark)' }}>Languages</h3>
          <ul className="assets-list">
            {languages.map((lang, index) => (
              <li key={index}>
                <FaCheckCircle style={{ color: 'var(--success)' }} />
                <span><strong>{lang.name}:</strong> {lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '1rem', color: 'var(--dark)' }}>Key Assets</h3>
          <ul className="assets-list">
            {about.assets.map((asset, index) => (
              <li key={index}>
                <FaCheckCircle style={{ color: 'var(--primary)' }} />
                <span>{asset}</span>
              </li>
            ))}
          </ul>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--dark)' }}>Interests</h3>
          <ul className="interests-list">
            {about.interests.map((interest, index) => (
              <li key={index}>
                <FaHeart style={{ color: 'var(--secondary)' }} />
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
