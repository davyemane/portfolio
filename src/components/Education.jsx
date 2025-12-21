import React from 'react';
import { FaGraduationCap, FaCertificate, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { education, certifications } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Education = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [educationRef, educationVisible] = useScrollAnimation();
  const [certRef, certVisible] = useScrollAnimation();

  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--bg)' }}>
      <h2
        ref={titleRef}
        className={`section-title ${titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        Education & Certifications
      </h2>

      {/* Education */}
      <div style={{ marginBottom: '4rem' }}>
        <h3
          className={educationVisible ? 'animate-fade-in-left delay-200' : 'animate-on-scroll'}
          style={{
            fontSize: '1.75rem',
            color: 'var(--dark)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <FaGraduationCap style={{ color: 'var(--primary)' }} />
          Academic Education
        </h3>
        <div
          ref={educationRef}
          className={`education-grid ${educationVisible ? 'stagger-children animated' : 'stagger-children'}`}
        >
          {education.map((edu, index) => (
            <div key={index} className="education-card hover-lift">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <span>
                    <FaCalendar style={{ marginRight: '0.5rem' }} />
                    {edu.period}
                  </span>
                  <span>
                    <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3
          className={certVisible ? 'animate-fade-in-left delay-200' : 'animate-on-scroll'}
          style={{
            fontSize: '1.75rem',
            color: 'var(--dark)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <FaCertificate style={{ color: 'var(--success)' }} />
          Professional Certifications
        </h3>
        <div
          ref={certRef}
          className={`certifications-grid ${certVisible ? 'stagger-children animated' : 'stagger-children'}`}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card hover-scale">
              <div className="certification-badge">
                <FaCertificate />
              </div>
              <div className="certification-content">
                <h4 className="certification-name">{cert.name}</h4>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">
                  <FaCalendar style={{ marginRight: '0.5rem', fontSize: '0.875rem' }} />
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
