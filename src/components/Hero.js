import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Repo Prompt</h1>
      <p>A powerful Swift macOS application for seamless file management and AI-assisted code changes.</p>
      <a href="https://testflight.apple.com/join/your-testflight-link" target="_blank" rel="noopener noreferrer" className="cta-button">Try it on TestFlight</a>
    </section>
  );
}

export default Hero;