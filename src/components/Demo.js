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
            url="https://youtu.be/ib6AVKIiTRU?si=DIv8dH6pddfVFGf5"
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