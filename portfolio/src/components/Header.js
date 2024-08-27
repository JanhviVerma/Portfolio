import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header({ toggleTheme }) {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        <FaSun className="sun-icon" />
        <FaMoon className="moon-icon" />
      </button>
    </header>
  );
}

export default Header;