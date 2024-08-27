import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Weather App</h3>
        <p>A React-based weather application that provides real-time weather information for any location. Utilizes a weather API to fetch and display current conditions, forecasts, and more.</p>
        <a href="https://github.com/JanhviVerma/weather-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project">
        <h3>Todo List</h3>
        <p>A simple yet effective todo list application built with React. Features include adding, editing, and deleting tasks, as well as marking tasks as complete.</p>
        <a href="https://github.com/JanhviVerma/todo-list" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project">
        <h3>Portfolio Website</h3>
        <p>This very website you're viewing! A showcase of my skills and projects, built using React and modern web technologies.</p>
        <a href="https://github.com/JanhviVerma/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
}

export default Projects;