import React from 'react';
import { FaBirthdayCake, FaMapMarkerAlt, FaSchool } from 'react-icons/fa';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hello! I'm Janhvi, a 9th-grade student with a passion for technology and sports. I believe in the power of continuous learning and always strive to expand my knowledge in both academic and extracurricular areas.</p>
          <ul className="about-details">
            <li><FaBirthdayCake /> 15 years old</li>
            <li><FaMapMarkerAlt /> Indore, MP, India</li>
            <li><FaSchool /> SICA School</li>
          </ul>
          <h3>Hobbies & Interests</h3>
          <ul className="hobbies-list">
            <li>Badminton</li>
            <li>Taekwondo</li>
            <li>Running</li>
            <li>Swimming</li>
            <li>Coding Projects</li>
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