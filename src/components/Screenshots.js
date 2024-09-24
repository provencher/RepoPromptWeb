import React from 'react';
import { Carousel } from 'antd';
import './Screenshots.css';

function Screenshots() {
  return (
    <div className="screenshots">
      <h2>Screenshots</h2>
      <Carousel autoplay>
        <div>
          <img src="/images/compose-light.png" alt="Compose view" />
        </div>
        <div>
          <img src="/images/chat-light.png" alt="Chat view" />
        </div>
        <div>
          <img src="/images/review-light.png" alt="Review view" />
        </div>
      </Carousel>
    </div>
  );
}

export default Screenshots;