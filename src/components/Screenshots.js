import React, { useState } from 'react';
import './Screenshots.css';

function Screenshots() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <section id="screenshots" className="screenshots">
      <h2>Visual Tour</h2>
      <p>Experience Repo Prompt in action. Toggle between light and dark modes to see how the app adapts to your preferences.</p>
      <button onClick={toggleMode} className="mode-toggle">
        Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <div className="screenshot-grid">
        <div className="screenshot-item">
          <h3>Chat</h3>
          <img src={`/images/chat-${mode}.png`} alt={`Chat in ${mode} mode`} />
        </div>
        <div className="screenshot-item">
          <h3>Compose</h3>
          <img src={`/images/compose-${mode}.png`} alt={`Compose in ${mode} mode`} />
        </div>
        <div className="screenshot-item">
          <h3>Review</h3>
          <img src={`/images/review-${mode}.png`} alt={`Review in ${mode} mode`} />
        </div>
      </div>
    </section>
  );
}

export default Screenshots;