import React from 'react';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hello! I'm Janhvi, a 9th-grade student at SICA School in Indore, MP, India. My passion for technology and sports drives me to constantly learn and grow.</p>
          <p>When I'm not coding or studying, you'll find me:</p>
          <ul>
            <li>Practicing Badminton</li>
            <li>Training in Taekwondo</li>
            <li>Going for long runs</li>
            <li>Swimming to stay fit</li>
            <li>Working on coding projects</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/path-to-your-image.jpg" alt="Janhvi Verma" />
        </div>
      </div>
    </section>
  );
}

export default About;