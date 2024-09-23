import React from 'react';
import './Screenshots.css';

function Screenshots({ theme }) {
  return (
    <section id="screenshots" className="screenshots">
      <h2>Visual Tour</h2>
      <p>Experience Repo Prompt in action. The app adapts to your system preferences for light and dark modes.</p>
      <div className="screenshot-grid">
        <div className="screenshot-item">
          <h3>Chat</h3>
          <img src={`/images/chat-${theme}.png`} alt={`Chat in ${theme} mode`} />
        </div>
        <div className="screenshot-item">
          <h3>Compose</h3>
          <img src={`/images/compose-${theme}.png`} alt={`Compose in ${theme} mode`} />
        </div>
        <div className="screenshot-item">
          <h3>Review</h3>
          <img src={`/images/review-${theme}.png`} alt={`Review in ${theme} mode`} />
        </div>
      </div>
    </section>
  );
}

export default Screenshots;