import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.body.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      document.body.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.body.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;