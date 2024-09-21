import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>File Access and Import</h3>
          <p>Easily access files and import them into the clipboard using PromptViewModel.swift.</p>
        </div>
        <div className="feature-item">
          <h3>AI-Powered Diff Extraction</h3>
          <p>Send files to various AI providers using AIQueryService.swift to extract and apply changes (diffs).</p>
        </div>
        <div className="feature-item">
          <h3>Compose Mode</h3>
          <p>Draft prompts with saved options and check token usage for selected files.</p>
        </div>
        <div className="feature-item">
          <h3>Chat Mode</h3>
          <p>Manage conversations with AI for extracting and applying diffs efficiently.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;