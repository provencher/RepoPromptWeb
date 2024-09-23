import React, { useState, useEffect } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Detect system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial theme based on system preference
    if (prefersDarkScheme.matches) {
      setTheme('dark');
      document.body.classList.add('dark');
    } else {
      setTheme('light');
      document.body.classList.remove('dark');
    }

    // Listen for changes to the system preference
    const themeChangeListener = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      document.body.classList.toggle('dark', e.matches);
    };

    prefersDarkScheme.addEventListener('change', themeChangeListener);

    return () => {
      prefersDarkScheme.removeEventListener('change', themeChangeListener);
    };
  }, []);

  return (
    <div className="App">
      <Toolbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots theme={theme} />
      <Footer />
    </div>
  );
}
export default App;