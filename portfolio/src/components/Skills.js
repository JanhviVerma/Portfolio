import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: FaHtml5, level: 90 },
    { name: 'CSS3', icon: FaCss3Alt, level: 85 },
    { name: 'JavaScript', icon: FaJs, level: 80 },
    { name: 'React', icon: FaReact, level: 75 },
    { name: 'Python', icon: FaPython, level: 70 },
    { name: 'Git', icon: FaGitAlt, level: 65 },
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <skill.icon />
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;