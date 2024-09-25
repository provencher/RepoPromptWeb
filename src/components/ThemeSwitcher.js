// src/components/ThemeSwitcher.js

import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher;