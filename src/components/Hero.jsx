import React, { useState } from 'react';
import { FaDownload, FaEye, FaEnvelope, FaGithub, FaLinkedin, FaGitlab, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../data/data';

const Hero = () => {
  const [photoError, setPhotoError] = useState(false);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-grid">

        {/* ── Left: Text ── */}
        <div className="hero-text">
          <div className="hero-badge animate-fade-in delay-100">
            <span className="hero-badge-dot" />
            Available for Remote Work
          </div>

          <p className="hero-greeting animate-fade-in-up delay-200">Hi, I'm</p>

          <h1 className="hero-name animate-fade-in-up delay-300">
            Felicien Davy<br />
            <span className="hero-name-accent">EMANE BILE.</span>
          </h1>

          <p className="hero-role animate-fade-in-up delay-400">
            Backend Developer &amp; Digital Systems Engineer
          </p>

          <p className="hero-tagline animate-fade-in-up delay-400">
            {personalInfo.tagline}
          </p>

          {/* Stats */}
          <div className="hero-stats animate-fade-in-up delay-500">
            <div className="hero-stat">
              <span className="hero-stat-num">2+</span>
              <span className="hero-stat-label">Years Exp.</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat">
              <span className="hero-stat-num">7+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat">
              <span className="hero-stat-num">10+</span>
              <span className="hero-stat-label">Technologies</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-ctas animate-fade-in-up delay-500">
            <button className="btn btn-primary" onClick={() => scroll('projects')}>
              <FaEye /> View Projects
            </button>
            <button className="btn btn-ghost" onClick={() => scroll('contact')}>
              <FaEnvelope /> Contact Me
            </button>
            <a href={personalInfo.cvUrl} className="btn btn-ghost" download>
              <FaDownload /> CV
            </a>
          </div>

          {/* Social links */}
          <div className="hero-socials animate-fade-in delay-600">
            <span className="hero-socials-label">Find me on</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={personalInfo.gitlab} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitLab">
              <FaGitlab />
            </a>
            <a href={`https://twitter.com/${personalInfo.twitter}`} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="hero-photo-col animate-fade-in-right delay-300">
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-inner">
              {!photoError ? (
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="hero-avatar-fallback">DE</div>
              )}
            </div>
          </div>

          {/* Mini tech pills below photo */}
          <div className="hero-tech-row">
            {['Django', 'FastAPI', 'Docker', 'PostgreSQL', 'Linux'].map(t => (
              <span key={t} className="hero-tech-pill">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
