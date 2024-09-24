// src/App.js

import React from 'react';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Home from './components/Home'; // Import Home component
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Hero />
      <Home /> {/* Render Home component */}
      <Footer />     
    </div>
  );
}

export default App;