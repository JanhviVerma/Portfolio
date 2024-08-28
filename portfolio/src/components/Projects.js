import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects({ setSelectedProject }) {
  const projects = [
    {
      title: "Weather App",
      description: "A React-based weather application providing real-time weather information.",
      githubLink: "https://github.com/JanhviVerma/weather-app",
      liveLink: "#",
      image: "/path-to-weather-app-image.jpg",
      technologies: ["React", "OpenWeatherMap API", "CSS3"]
    },
    {
      title: "Todo List",
      description: "A feature-rich todo list application built with React.",
      githubLink: "https://github.com/JanhviVerma/todo-list",
      liveLink: "#",
      image: "/path-to-todo-list-image.jpg",
      technologies: ["React", "LocalStorage", "CSS3"]
    },
    {
      title: "Portfolio Website",
      description: "This interactive portfolio showcasing my skills and projects.",
      githubLink: "https://github.com/JanhviVerma/portfolio",
      liveLink: "#",
      image: "/path-to-portfolio-image.jpg",
      technologies: ["React", "CSS3", "React Icons"]
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
            <img src={project.image} alt={project.title} />
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