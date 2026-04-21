import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaArrowLeft, FaClock, FaBuilding, FaMapMarkerAlt,
  FaGithub, FaExternalLinkAlt,
  FaLeaf, FaHospital, FaHome, FaGraduationCap,
  FaBook, FaBriefcase, FaMobileAlt, FaFlask
} from 'react-icons/fa';
import { projects } from '../data/data';
import Header from './Header';

const iconMap = {
  FaLeaf, FaHospital, FaHome, FaGraduationCap,
  FaBook, FaBriefcase, FaMobileAlt, FaFlask
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-detail-page">
        <Header />
        <div className="project-detail-container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
          <h2 style={{ color: 'var(--heading)', marginBottom: '1rem' }}>Project not found</h2>
          <p style={{ color: 'var(--text)', marginBottom: '2rem' }}>
            This project doesn't exist or has been removed.
          </p>
          <Link to="/" className="btn btn-outline">
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[project.icon];

  return (
    <div className="project-detail-page">
      <Header />
      <div className="project-detail-container">
        {/* Back button */}
        <Link to="/" className="back-btn">
          <FaArrowLeft /> Back to Portfolio
        </Link>

        {/* Hero banner */}
        <div
          className="detail-hero"
          style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}bb 100%)` }}
        >
          <div className="detail-hero-top">
            <div className="detail-hero-icon">
              {IconComponent && <IconComponent />}
            </div>
            <div>
              <h1>{project.title}</h1>
              <p className="detail-hero-subtitle">{project.subtitle}</p>
            </div>
          </div>
          <div className="detail-hero-meta">
            <span><FaClock /> {project.period}</span>
            <span><FaBuilding /> {project.company}</span>
            <span><FaMapMarkerAlt /> {project.location}</span>
          </div>
        </div>

        {/* Content cards */}
        <div className="detail-body">
          {/* Description */}
          <div className="detail-card">
            <h2>About this project</h2>
            <p>{project.description}</p>
          </div>

          {/* Achievements */}
          <div className="detail-card">
            <h2>Key Achievements</h2>
            <ul className="detail-achievements">
              {project.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="detail-card">
            <h2>Tech Stack</h2>
            <div className="detail-stack">
              {project.stack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="detail-card">
              <h2>Links</h2>
              <div className="detail-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom nav */}
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/" className="back-btn">
            <FaArrowLeft /> Back to Portfolio
          </Link>

          {/* Previous / Next */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {project.id > 1 && (
              <Link
                to={`/projects/${project.id - 1}`}
                className="back-btn"
                style={{ gap: '0.5rem' }}
              >
                ← Previous
              </Link>
            )}
            {project.id < projects.length && (
              <Link
                to={`/projects/${project.id + 1}`}
                className="back-btn"
                style={{ gap: '0.5rem' }}
              >
                Next →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
