// src/components/Demo.js
import React from 'react';
import ReactPlayer from 'react-player';
import './Demo.css';

function Demo() {
  return (
    <section id="demo" className="demo">
      <div className="demo-content">
        <div className="player-wrapper">
          <ReactPlayer
            url="https://youtu.be/1ej5_g6HWi4?si=NNRQ2gaxZDZi_dzX"
            playing={true}
            loop={true}
            muted={true}
            playsinline={true}
            controls={true}
            width="100%"
            height="100%"
            className="react-player"
          />
        </div>
      </div>
    </section>
  );
}

export default Demo;