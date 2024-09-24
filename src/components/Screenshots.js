// src/components/Screenshots.js

import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Carousel } from 'antd';
import './Screenshots.css';

const Screenshots = forwardRef((props, ref) => {
  const carouselRef = useRef(null);

  useImperativeHandle(ref, () => ({
    goTo: (slideIndex, dontAnimate) => {
      if (carouselRef.current && typeof carouselRef.current.goTo === 'function') {
        carouselRef.current.goTo(slideIndex, dontAnimate);
      }
    },
  }));

  return (
    <div className="screenshots">
      <Carousel ref={carouselRef} autoplay>
        <div className="screenshot-item">
          <img src="/images/compose-light.png" alt="Compose feature interface showing file selection and context setting" />
        </div>
        <div className="screenshot-item">
          <img src="/images/chat-light.png" alt="Chat interface demonstrating AI conversation about selected files" />
        </div>
        <div className="screenshot-item">
          <img src="/images/review-light.png" alt="Review interface displaying changes made to files by AI" />
        </div>
      </Carousel>
    </div>
  );
});

export default Screenshots;