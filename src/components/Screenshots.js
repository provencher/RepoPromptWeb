import React from 'react';
import { Carousel } from 'antd';
import './Screenshots.css';

function Screenshots() {
  return (
    <div className="screenshots">
      <h2>Screenshots</h2>
      <Carousel autoplay>
        <div>
          <img src="/images/compose-light.png" alt="Compose feature interface showing file selection and context setting" />
        </div>
        <div>
          <img src="/images/chat-light.png" alt="Chat interface demonstrating AI conversation about selected files" />
        </div>
        <div>
          <img src="/images/review-light.png" alt="Review interface displaying changes made to files by AI" />
        </div>
      </Carousel>
    </div>
  );
}

export default Screenshots;