import React from 'react';
import './Screenshots.css';

function Screenshots({ theme }) {
  return (
    <section id="screenshots" className="screenshots">
      <h2>Visual Tour</h2>
      <p>Experience the full workflow of Repo Prompt. See how the app guides you through composing, chatting, and reviewing.</p>
      <div className="screenshot-grid">
        <div className="screenshot-item">
          <h3>Compose</h3>
          <img src={`/images/compose-${theme}.png`} alt={`Compose view in ${theme} mode`} />
          <p>Select files, craft instructions, and prepare for AI interaction.</p>
        </div>
        <div className="screenshot-item">
          <h3>Chat</h3>
          <img src={`/images/chat-${theme}.png`} alt={`Chat view in ${theme} mode`} />
          <p>Engage with AI to generate and refine code changes.</p>
        </div>
        <div className="screenshot-item">
          <h3>Review</h3>
          <img src={`/images/review-${theme}.png`} alt={`Review view in ${theme} mode`} />
          <p>Examine, accept, and save generated changes to your project.</p>
        </div>
      </div>
    </section>
  );
}

export default Screenshots;