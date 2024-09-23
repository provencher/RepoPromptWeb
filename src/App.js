import React, { useState, useEffect } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Detect system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to update theme
    const updateTheme = (isDark) => {
      setTheme(isDark ? 'dark' : 'light');
      document.body.classList.toggle('dark', isDark);
    };

    // Set initial theme based on system preference
    updateTheme(prefersDarkScheme.matches);

    // Listen for changes to the system preference
    const themeChangeListener = (e) => {
      updateTheme(e.matches);
    };

    prefersDarkScheme.addEventListener('change', themeChangeListener);

    // Cleanup listener on unmount
    return () => {
      prefersDarkScheme.removeEventListener('change', themeChangeListener);
    };
  }, []);

  return (
    <div className="App">
      <Toolbar />
      <Hero />
      <Features theme={theme} />
      <Footer />
    </div>
  );
}

export default App;