import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects setSelectedProject={setSelectedProject} />
        <Achievements />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Janhvi Verma. All rights reserved.</p>
      </footer>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

export default App;