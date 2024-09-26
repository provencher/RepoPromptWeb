// src/App.js

import React, { useRef, useState, useEffect } from 'react';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Demo from './components/Demo';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const screenshotsRef = useRef(null);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('isDarkMode');
    
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    } else {
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleFeatureClick = (index) => {
    if (screenshotsRef.current) {
      screenshotsRef.current.goTo(index, true);
    }
  };

  return (
    <div className="App">
      <Toolbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <Demo />
      <Features onFeatureClick={handleFeatureClick} />
      <Screenshots ref={screenshotsRef} isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}

export default App;