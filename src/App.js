import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Toolbar />
      <Hero />
      <Features />
      <HowItWorks />
      <InteractiveDemo />
      <Footer />
    </div>
  );
}

export default App;