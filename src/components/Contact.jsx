import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaGitlab } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [bodyRef, bodyVisible] = useScrollAnimation();

  return (
    <div className="contact">
      <div className="contact-inner">
        <div ref={titleRef} className={titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let's <span>Work Together</span>
          </h2>
        </div>

        <p
          ref={bodyRef}
          className={`contact-subtitle ${bodyVisible ? 'animate-fade-in-up delay-200' : 'animate-on-scroll'}`}
        >
          I'm currently open to remote opportunities. Whether it's a project, a job offer,
          or just a chat — my inbox is always open.
        </p>

        {/* Contact cards */}
        <div className={`contact-cards ${bodyVisible ? 'stagger-children animated' : 'stagger-children'}`}>
          <a href={`mailto:${personalInfo.email}`} className="contact-card">
            <FaEnvelope />
            {personalInfo.email}
          </a>
          <a href={`tel:${personalInfo.phone}`} className="contact-card">
            <FaPhone />
            {personalInfo.phone}
          </a>
          <span className="contact-card" style={{ cursor: 'default' }}>
            <FaMapMarkerAlt />
            {personalInfo.location}
          </span>
        </div>

        {/* Social */}
        <div className={`social-links ${bodyVisible ? 'animate-fade-in-up delay-400' : 'animate-on-scroll'}`}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link github" title="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.gitlab} target="_blank" rel="noopener noreferrer" className="social-link gitlab" title="GitLab">
            <FaGitlab />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`https://twitter.com/${personalInfo.twitter}`} target="_blank" rel="noopener noreferrer" className="social-link twitter" title="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
