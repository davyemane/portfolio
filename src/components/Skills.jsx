import React from 'react';
import {
  FaProjectDiagram,
  FaServer,
  FaDocker,
  FaDatabase,
  FaLinux,
  FaGitAlt
} from 'react-icons/fa';
import { skills } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  // Map icon names to actual icon components
  const iconMap = {
    FaProjectDiagram,
    FaServer,
    FaDocker,
    FaDatabase,
    FaLinux,
    FaGitAlt
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg)' }}>
      <h2
        ref={titleRef}
        className={`section-title ${titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        Technical Skills
      </h2>
      <div
        ref={gridRef}
        className={`skills-grid ${gridVisible ? 'stagger-children animated' : 'stagger-children'}`}
      >
        {Object.entries(skills).map(([category, skillData]) => (
          <div key={category} className="skill-category hover-lift">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                fontSize: '1.75rem',
                color: skillData.color,
                background: `${skillData.color}15`,
                padding: '0.5rem',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {getIcon(skillData.icon)}
              </div>
              <h3 style={{ margin: 0, color: skillData.color }}>{category}</h3>
            </div>
            <ul>
              {skillData.items.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
