// src/App.js

import React from 'react';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="screenshots">
        <Screenshots />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;