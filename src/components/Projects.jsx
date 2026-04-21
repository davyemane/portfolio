import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock, FaBuilding, FaMapMarkerAlt, FaArrowRight, FaGithub, FaExternalLinkAlt,
  FaLeaf, FaHospital, FaHome, FaGraduationCap, FaBook, FaBriefcase, FaMobileAlt, FaFlask
} from 'react-icons/fa';
import { projects } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const iconMap = { FaLeaf, FaHospital, FaHome, FaGraduationCap, FaBook, FaBriefcase, FaMobileAlt, FaFlask };

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <section id="projects" className="section">
      <div ref={titleRef} className={titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}>
        <p className="section-label">Work</p>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
      </div>

      <div
        ref={gridRef}
        className={`projects-grid ${gridVisible ? 'stagger-children animated' : 'stagger-children'}`}
      >
        {projects.filter(p => p.featured).map((project) => {
          const IconComponent = iconMap[project.icon];
          return (
            <div key={project.id} className="project-card">
              {/* Top accent bar */}
              <div className="project-accent-bar" style={{ background: project.color }} />

              {/* Header */}
              <div className="project-header">
                <div
                  className="project-icon-wrap"
                  style={{ background: project.color }}
                >
                  {IconComponent && <IconComponent />}
                </div>
                <div className="project-header-info">
                  <p className="project-title">{project.title}</p>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <span className="project-period">
                  <FaClock size={10} />{project.period}
                </span>
              </div>

              {/* Body */}
              <div className="project-body">
                <div className="project-meta">
                  <span><FaBuilding size={11} />{project.company}</span>
                  <span><FaMapMarkerAlt size={11} />{project.location}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-achievements-list">
                  {project.achievements.slice(0, 3).map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="project-footer">
                <div className="project-stack">
                  {project.stack.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-btns">
                  <Link to={`/projects/${project.id}`} className="btn-sm btn-sm-primary">
                    Details <FaArrowRight size={10} />
                  </Link>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-ghost" title="Live site">
                      <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-ghost" title="GitHub">
                      <FaGithub size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
