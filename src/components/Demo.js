// src/components/Demo.js

import React from 'react';
import './Demo.css';

function Demo() {
  return (
    <section id="demo" className="demo">
      <div className="demo-content">
        <video
          src="/videos/DarkModeSiteEdit.mp4"
          autoPlay
          loop
          muted
          className="demo-video"
        />
      </div>
    </section>
  );
}

export default Demo;