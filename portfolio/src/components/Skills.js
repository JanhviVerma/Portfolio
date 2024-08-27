import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <FaHtml5 />
          <span>HTML5</span>
        </div>
        <div className="skill-item">
          <FaCss3Alt />
          <span>CSS3</span>
        </div>
        <div className="skill-item">
          <FaJs />
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <FaReact />
          <span>React</span>
        </div>
        <div className="skill-item">
          <FaPython />
          <span>Python</span>
        </div>
        <div className="skill-item">
          <FaGitAlt />
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
