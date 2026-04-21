import React from 'react';
import { FaCheckCircle, FaHeart, FaMapMarkerAlt, FaEnvelope, FaCode } from 'react-icons/fa';
import { about, languages, personalInfo } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const stats = [
  { num: '2+', label: 'Years Experience', desc: 'Production projects' },
  { num: '8+', label: 'Projects Delivered', desc: 'From API to mobile' },
  { num: '15+', label: 'Technologies', desc: 'Backend to DevOps' },
];

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section id="about" className="section">

      {/* Label + Title */}
      <div ref={titleRef} className={titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}>
        <p className="section-label">About Me</p>
        <h2 className="section-title">Who I <span>Am</span></h2>
      </div>

      {/* Stats row */}
      <div
        ref={statsRef}
        className={`about-stats-row ${statsVisible ? 'stagger-children animated' : 'stagger-children'}`}
      >
        {stats.map((s, i) => (
          <div key={i} className="about-stat-card">
            <span className="about-stat-num">{s.num}</span>
            <span className="about-stat-label">{s.label}</span>
            <span className="about-stat-desc">{s.desc}</span>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div
        ref={gridRef}
        className={`about-main-grid ${gridVisible ? 'animate-fade-in-up delay-200' : 'animate-on-scroll'}`}
      >
        {/* Left: bio + quick info */}
        <div className="about-left">
          <p className="about-description">{about.description}</p>

          {/* Quick facts */}
          <div className="about-quick-facts">
            <div className="about-fact">
              <FaMapMarkerAlt style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="about-fact">
              <FaEnvelope style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="about-fact">
              <FaCode style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span>Open to remote opportunities</span>
            </div>
          </div>

          {/* Languages */}
          <h3 className="about-sub-title">Languages</h3>
          <ul className="about-list">
            {languages.map((lang, i) => (
              <li key={i}>
                <FaCheckCircle style={{ color: 'var(--green)', flexShrink: 0 }} />
                <span><strong>{lang.name}:</strong> {lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: assets + interests */}
        <div className="about-right">
          <h3 className="about-sub-title">Key Assets</h3>
          <ul className="about-list">
            {about.assets.map((asset, i) => (
              <li key={i}>
                <FaCheckCircle style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span>{asset}</span>
              </li>
            ))}
          </ul>

          <h3 className="about-sub-title" style={{ marginTop: '1.75rem' }}>Interests</h3>
          <div className="about-interests">
            {about.interests.map((interest, i) => (
              <span key={i} className="about-interest-tag">
                <FaHeart style={{ fontSize: '.7rem', color: 'var(--accent2)' }} />
                {interest}
              </span>
            ))}
          </div>

          {/* Available card */}
          <div className="about-available-card">
            <div className="about-available-dot" />
            <div>
              <p style={{ fontWeight: 700, color: 'var(--heading)', fontSize: '.95rem' }}>
                Available for Remote Work
              </p>
              <p style={{ fontSize: '.82rem', color: 'var(--muted)', marginTop: '.2rem' }}>
                Open to full-time, part-time or freelance opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
