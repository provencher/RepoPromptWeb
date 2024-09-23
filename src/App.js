import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Footer />
    </div>
  );
}

export default App;