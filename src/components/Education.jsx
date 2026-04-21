import React from 'react';
import { FaGraduationCap, FaCertificate, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { education, certifications } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Education = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [eduRef, eduVisible] = useScrollAnimation();
  const [certRef, certVisible] = useScrollAnimation();

  return (
    <div className="section-alt">
      <section id="education" className="section">
        <div ref={titleRef} className={titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}>
          <p className="section-label">Background</p>
          <h2 className="section-title">
            Education & <span>Certifications</span>
          </h2>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '1rem', fontWeight: 800, letterSpacing: '-.01em',
            color: 'var(--heading)', marginBottom: '1.25rem',
            display: 'flex', alignItems: 'center', gap: '.625rem'
          }}>
            <FaGraduationCap style={{ color: 'var(--accent)', fontSize: '1.2rem' }} />
            Academic Education
          </h3>
          <div
            ref={eduRef}
            className={`education-grid ${eduVisible ? 'stagger-children animated' : 'stagger-children'}`}
          >
            {education.map((edu, i) => (
              <div key={i} className="education-card">
                <div className="education-icon"><FaGraduationCap /></div>
                <div>
                  <p className="education-degree">{edu.degree}</p>
                  <p className="education-institution">{edu.institution}</p>
                  <div className="education-meta">
                    <span><FaCalendar />{edu.period}</span>
                    <span><FaMapMarkerAlt />{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{
            fontSize: '1rem', fontWeight: 800, letterSpacing: '-.01em',
            color: 'var(--heading)', marginBottom: '1.25rem',
            display: 'flex', alignItems: 'center', gap: '.625rem'
          }}>
            <FaCertificate style={{ color: 'var(--green)', fontSize: '1.2rem' }} />
            Professional Certifications
          </h3>
          <div
            ref={certRef}
            className={`certifications-grid ${certVisible ? 'stagger-children animated' : 'stagger-children'}`}
          >
            {certifications.map((cert, i) => (
              <div key={i} className="certification-card">
                <div className="certification-badge"><FaCertificate /></div>
                <div>
                  <p className="certification-name">{cert.name}</p>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-date">
                    <FaCalendar />{cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
