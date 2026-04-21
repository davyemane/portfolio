import React from 'react';
import {
  FaServer, FaDocker, FaDatabase, FaGitAlt, FaMobileAlt
} from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { skills } from '../data/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const iconMap = {
  FaServer,
  FaDocker,
  FaDatabase,
  FaGitAlt,
  FaMobileAlt,
  FaChartLine,
};

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [bodyRef, bodyVisible] = useScrollAnimation();

  const entries = Object.entries(skills);
  const half = Math.ceil(entries.length / 2);
  const leftCol = entries.slice(0, half);
  const rightCol = entries.slice(half);

  const renderGroup = ([category, data]) => {
    const IconComponent = iconMap[data.icon];
    return (
      <div key={category} className="skill-group">
        <div className="skill-group-title">
          <div
            className="skill-group-icon"
            style={{ background: `${data.color}18`, color: data.color }}
          >
            {IconComponent && <IconComponent />}
          </div>
          <span>{category}</span>
        </div>
        <div className="skill-tags">
          {data.items.map((item, i) => (
            <span key={i} className="skill-tag">{item}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="section-alt">
      <section id="skills" className="section">
        <div ref={titleRef} className={titleVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical <span>Stack</span></h2>
        </div>

        <div
          ref={bodyRef}
          className={`skills-two-col ${bodyVisible ? 'animate-fade-in-up delay-200' : 'animate-on-scroll'}`}
        >
          <div className="skills-col">
            {leftCol.map(renderGroup)}
          </div>
          <div className="skills-col">
            {rightCol.map(renderGroup)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
