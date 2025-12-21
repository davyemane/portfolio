import React from 'react';
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaClock,
  FaLeaf,
  FaHospital,
  FaHome,
  FaGraduationCap,
  FaBook
} from 'react-icons/fa';
import { projects } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  // Map icon names to actual icon components
  const iconMap = {
    FaLeaf,
    FaHospital,
    FaHome,
    FaGraduationCap,
    FaBook
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <section id="projects" className="section">
      <h2
        ref={titleRef}
        className={`section-title ${titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        Featured Projects
      </h2>
      <div
        ref={gridRef}
        className={`projects-grid ${gridVisible ? 'stagger-children animated' : 'stagger-children'}`}
      >
        {projects.filter(p => p.featured).map((project) => (
          <div key={project.id} className="project-card hover-lift">
            <div className="project-header" style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  fontSize: '2.5rem',
                  opacity: 0.9,
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getIcon(project.icon)}
                </div>
                <div style={{ flex: 1 }}>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>
              <div className="project-period">
                <FaClock style={{ display: 'inline', marginRight: '0.5rem' }} />
                {project.period}
              </div>
            </div>
            <div className="project-body">
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--gray)' }}>
                <span><FaBuilding style={{ marginRight: '0.3rem' }} />{project.company}</span>
                <span><FaMapMarkerAlt style={{ marginRight: '0.3rem' }} />{project.location}</span>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {project.achievements.slice(0, 5).map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tech-stack">
                {project.stack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
