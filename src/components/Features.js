// File: src/components/Features.js

import React, { useState, useRef } from 'react';
import './Features.css';

// SVG Arrow Component
const Arrow = ({ onClick }) => (
  <svg
    className="arrow"
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

// SVG Circular Arrow Component (Loop Arrow)
const LoopArrow = ({ onClick }) => (
  <svg
    className="loop-arrow"
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-3.49-7.86" />
  </svg>
);

function Features({ theme }) {
  const [modalImage, setModalImage] = useState(null);

  // Create refs for each feature
  const featureRefs = useRef([]);

  const features = [
    {
      title: 'Compose',
      description:
        'Select a folder, compose instructions, and leverage saved prompts. Preview files and review token usage before proceeding.',
      imgSrc: `/images/compose-${theme}.png`,
      alt: 'Compose view',
    },
    {
      title: 'Chat',
      description:
        'Interact with the AI model to generate and refine code changes. Review and merge changes after each message.',
      imgSrc: `/images/chat-${theme}.png`,
      alt: 'Chat view',
    },
    {
      title: 'Review',
      description:
        'Examine generated changes, accept modifications individually or all at once, and save everything to your disk.',
      imgSrc: `/images/review-${theme}.png`,
      alt: 'Review view',
    },
  ];

  const openModal = (imgSrc, alt) => {
    setModalImage({ src: imgSrc, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // Function to scroll to a specific ref
  const scrollToRef = (index) => {
    featureRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features" className="features">
      <h2>How It Works</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="feature-item" ref={(el) => (featureRefs.current[index] = el)}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <img
                src={feature.imgSrc}
                alt={feature.alt}
                className="feature-image"
                onClick={() => openModal(feature.imgSrc, feature.alt)}
              />
            </div>
            <div className="arrow-container">
              {index < features.length - 1 ? (
                <Arrow onClick={() => scrollToRef(index + 1)} />
              ) : (
                <LoopArrow onClick={() => scrollToRef(0)} />
              )}
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage.src} alt={modalImage.alt} />
          <div className="caption">{modalImage.alt}</div>
        </div>
      )}
    </section>
  );
}

export default Features;