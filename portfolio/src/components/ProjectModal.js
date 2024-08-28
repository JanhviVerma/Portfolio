import React from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}><FaTimes /></button>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <h3>Technologies Used:</h3>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="modal-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /> View on GitHub</a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;