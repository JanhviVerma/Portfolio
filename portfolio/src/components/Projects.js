import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "A React-based weather application providing real-time weather information.",
      githubLink: "https://github.com/JanhviVerma/weather-app",
      liveLink: "#"
    },
    {
      title: "Todo List",
      description: "A feature-rich todo list application built with React.",
      githubLink: "https://github.com/JanhviVerma/todo-list",
      liveLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "This interactive portfolio showcasing my skills and projects.",
      githubLink: "https://github.com/JanhviVerma/portfolio",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;