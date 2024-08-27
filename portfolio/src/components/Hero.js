import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Janhvi Verma</h1>
        <h2>Student Developer</h2>
        <p>Passionate about coding, sports, and continuous learning</p>
        <div className="social-links">
          <a href="https://github.com/JanhviVerma" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/janhvi-verma" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;