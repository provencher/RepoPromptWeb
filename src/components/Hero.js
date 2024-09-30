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
        <div className="button-group">
          <a
            href="https://testflight.apple.com/join/nVjVGWNe"
            className="cta-button testflight-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Testflight
          </a>
          <a
            href="https://discord.gg/NtbFDAJPGM"
            className="cta-button discord-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/icon_clyde_blurple_RGB.svg" alt="Discord Logo" className="discord-logo" />
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;