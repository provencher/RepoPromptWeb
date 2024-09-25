// src/App.js

import React, { useRef, useState, useEffect } from 'react';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Create a reference to the Screenshots carousel
  const carouselRef = useRef(null);

  // State to manage theme (light/dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On component mount, check localStorage for theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('dark');
        localStorage.setItem('isDarkMode', 'true');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('isDarkMode', 'false');
      }
      return newMode;
    });
  };

  // Handler to navigate to a specific slide
  const handleFeatureClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index, false); // false for animated transition
    }
  };

  return (
    <div className="App">
      <Toolbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      {/* Pass the handler to Features */}
      <Features onFeatureClick={handleFeatureClick} />
      {/* Attach the ref to Screenshots */}
      <Screenshots ref={carouselRef} />
      <Footer />
    </div>
  );
}

export default App;