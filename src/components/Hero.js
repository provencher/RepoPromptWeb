import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Repo Prompt</h1>
        <h2>Augment your AI-assisted coding flow, without replacing your IDE</h2>
        <ul>
          <li>Create targeted prompts using your project files</li>
          <li>Provide AI with seamless access to your code context</li>
          <li>Review and selectively implement AI-proposed changes</li>
          <li>Eliminate the need for manual copy-pasting when integrating changes</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;