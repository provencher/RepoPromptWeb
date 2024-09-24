// src/components/Home.js

import React, { useRef } from 'react';
import Features from './Features';
import Screenshots from './Screenshots';

function Home() {
  const carouselRef = useRef(null);

  const handleFeatureClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index, true);
    }
  };

  return (
    <div>
      <Features onFeatureClick={handleFeatureClick} />
      <Screenshots ref={carouselRef} />
    </div>
  );
}

export default Home;