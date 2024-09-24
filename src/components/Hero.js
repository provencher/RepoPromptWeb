// src/components/Hero.js

import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Repo Prompt</h1>
        <p>
          Manage your repositories efficiently with AI-assisted code changes. Seamlessly integrate, modify, and review your projects with ease.
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