// src/components/Toolbar.js

import React, { useState, useEffect } from 'react';
import './Toolbar.css';
import ThemeSwitcher from './ThemeSwitcher';

const Toolbar = ({ isDarkMode, toggleTheme }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      // Logarithmic ease-in transition
      const heroHeight = 500;
      const newOpacity = Math.log(1 + (position / heroHeight) * (Math.E - 1)) / Math.log(Math.E);
      setOpacity(Math.min(newOpacity, 1));
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showTitle = windowWidth > 768;

  return (
    <nav className={`toolbar ${isDarkMode ? 'dark' : ''}`} style={{ backgroundColor: `rgba(${isDarkMode ? '18, 18, 18' : '255, 255, 255'}, ${opacity})` }}>
      <div className="toolbar-content">
        <div className="logo-title" style={{ opacity }}>
          <img src="/images/RepoPromptLogo_NoBG.png" alt="Repo Prompt Logo" className="logo" />
          {showTitle && <h1 className="title">Repo Prompt</h1>}
        </div>
        <ul className="nav-items">
          <li><a href="#features">Features</a></li>
          <li><a href="#screenshots">Screenshots</a></li>
          <li><a href="#download">Download</a></li>
        </ul>
        <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default Toolbar;