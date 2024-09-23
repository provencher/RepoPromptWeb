import React from 'react';
import './Toolbar.css';

function Toolbar() {
  return (
    <header className="toolbar">
      <div className="logo">Repo Prompt</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How it Works</a></li>
          <li><a href="https://forms.gle/mZg615mfYPAzfBrd7" target="_blank" rel="noopener noreferrer" className="testflight-button">Join TestFlight</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Toolbar;