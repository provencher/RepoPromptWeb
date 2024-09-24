// src/App.js

import React, { useRef } from 'react';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Create a reference to the Screenshots carousel
  const carouselRef = useRef(null);

  // Handler to navigate to a specific slide
  const handleFeatureClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index, false); // false for animated transition
    }
  };

  return (
    <div className="App">
      <Toolbar />
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