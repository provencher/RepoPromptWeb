import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Smart File Selection</h3>
          <p>Easily select folders and files for AI interaction.</p>
        </div>
        <div className="feature-item">
          <h3>Prompt Composition</h3>
          <p>Craft instructions with saved prompts and preview token usage.</p>
        </div>
        <div className="feature-item">
          <h3>AI-Powered Chat</h3>
          <p>Engage in meaningful conversations to refine code changes.</p>
        </div>
        <div className="feature-item">
          <h3>Seamless Review Process</h3>
          <p>Examine and accept changes with an intuitive interface.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;