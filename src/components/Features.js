// File: src/components/Features.js

import React, { useRef, useState } from 'react';
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
  // Create refs for each feature
  const featureRefs = useRef([]);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setExpandedImage(imgSrc);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  const scrollToRef = (index) => {
    if (featureRefs.current[index]) {
      featureRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const features = [
    {
      title: 'Compose',
      description: [
        'Select files and folders that will be a part of your prompt\'s context',
        'Accelerate your workflow with saved promp\'s, defining reuseable concepts for the LLM to follow',
        'Preview files by clicking them and estimate token usage',
        'Copy your constucted prompt to the clipbaord for external use or start an AI chat session',
      ],
      imgSrc: `/images/compose-${theme}.png`,
      alt: 'Compose view: intuitive file selection, instruction composition, and change preview',
      align: 'left',
    },
    {
      title: 'Chat',
      description: [
        'Using your own API-keys for OpenAI or Anthropic, begin a chat that will allow the LLM to interact with your files directly',
        'Talk to the AI about your files, or let it modify them by creating diffs for files even thousands of lines long',
        'Click merge to review and accept proposed changes',
        'Your updated files will be sent to the AI automatically in the next message to further iterate and make new diffs',
      ],
      imgSrc: `/images/chat-${theme}.png`,
      alt: 'Chat view: interactive AI conversation and streamlined change review process',
      align: 'right',
    },
    {
      title: 'Review',
      description: [
        'Analyze all created, modified, and deleted files in detail',
        'Accept changes individually or in bulk with a single click',
        'Save approved modifications directly to your local disk',
        'Return to chat for further iterations or start fresh in compose',
      ],
      imgSrc: `/images/review-${theme}.png`,
      alt: 'Review view: comprehensive change analysis and flexible acceptance options',
      align: 'left',
    },
   ];
  return (
    <section id="features" className="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index}>
            <div
              className="feature-item"
              ref={(el) => (featureRefs.current[index] = el)}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="feature-content">
  <h3>{feature.title}</h3>
  <ul>
    {feature.description.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
</div>
                  <div className="feature-image-container">
                    <img
                      src={feature.imgSrc}
                      alt={feature.alt}
                      className="feature-image"
                      onClick={() => handleImageClick(feature.imgSrc)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="feature-image-container">
                    <img
                      src={feature.imgSrc}
                      alt={feature.alt}
                      className="feature-image"
                      onClick={() => handleImageClick(feature.imgSrc)} // Added onClick for consistency
                    />
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </>
              )}
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
      {expandedImage && (
        <div className="expanded-image-overlay" onClick={closeExpandedImage}>
          <img src={expandedImage} alt="Expanded view" className="expanded-image" />
        </div>
      )}
    </section>
  );
}

export default Features;