// src/components/Demo.js

import React from 'react';
import ReactPlayer from 'react-player';
import './Demo.css';

function Demo() {
  return (
    <section id="demo" className="demo">
      <div className="demo-content">
        <ReactPlayer
          url="/videos/DarkModeSiteEdit.mp4"
          playing={true}
          loop={true}
          muted={true}
          playsinline={true}
          controls={true}
          width="100%"
          height="auto"
          className="demo-video"
        />
      </div>
    </section>
  );
}

export default Demo;