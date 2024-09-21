import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Compose Mode</h3>
          <p>Use InstructionsView.swift to draft prompts with saved options. PromptViewModel.swift helps you select files and check token usage.</p>
        </div>
        <div className="step">
          <h3>2. File Processing</h3>
          <p>Access and import files into the clipboard or send them to AI providers using AIQueryService.swift.</p>
        </div>
        <div className="step">
          <h3>3. AI Interaction</h3>
          <p>Extract changes (diffs) from AI providers and incorporate them back into your project.</p>
        </div>
        <div className="step">
          <h3>4. Chat Mode</h3>
          <p>Manage ongoing conversations with AI to refine and apply changes to your codebase.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;