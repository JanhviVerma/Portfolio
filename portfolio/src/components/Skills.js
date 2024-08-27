import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Programming</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Teamwork</li>
            <li>Creativity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;