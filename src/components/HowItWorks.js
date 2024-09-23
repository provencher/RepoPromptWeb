import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Compose</h3>
          <p>Select files, compose instructions, and leverage saved prompts. Preview files and review token usage before proceeding.</p>
        </div>
        <div className="step">
          <h3>2. Chat</h3>
          <p>Interact with the selected AI model to generate and refine code changes. Review and merge changes after each message.</p>
        </div>
        <div className="step">
          <h3>3. Review</h3>
          <p>Examine generated changes, accept modifications individually or all at once, and save everything to your disk.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;