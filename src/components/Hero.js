// src/components/Hero.js

import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src="/images/RepoPromptLogo_NoBG.png" alt="Repo Prompt Logo" className="hero-logo" />
        <h1>Repo Prompt</h1>
        <p>
          A macOS native app designed to remove all the friction involved in iterating on your local files with the most powerful language models       
        </p>      
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc6_MPoiCtlJ8vdCZ_w6Mg2yC7CI7RtlMNinG82nbM14dJ9Dg/viewform"
          className="cta-button testflight-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Testflight
        </a>
      </div>
    </section>
  );
}

export default Hero;