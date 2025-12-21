import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaGitlab } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section id="contact" className="section contact">
      <div className="contact-content">
        <h2
          ref={titleRef}
          className={`section-title ${titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
          style={{ color: 'var(--white)' }}
        >
          Get In Touch
        </h2>
        <p
          className={contentVisible ? 'animate-fade-in-up delay-200' : 'animate-on-scroll'}
          style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--light-gray)' }}
        >
          I'm currently open to remote opportunities. Feel free to reach out!
        </p>

        <div
          ref={contentRef}
          className={`contact-info ${contentVisible ? 'stagger-children animated' : 'stagger-children'}`}
        >
          <div className="contact-item">
            <FaEnvelope />
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div className="contact-item">
            <FaPhone />
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>{personalInfo.location}</span>
          </div>
        </div>
        
        <div className={`social-links ${contentVisible ? 'animate-fade-in-up delay-400' : 'animate-on-scroll'}`}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover-scale"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover-scale"
            title="GitLab"
          >
            <FaGitlab />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover-scale"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`https://twitter.com/${personalInfo.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover-scale"
            title="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
