import React, { useState } from 'react';
import './Features.css';

function Features({ theme }) {
  const [modalImage, setModalImage] = useState(null);

  const features = [
    {
      title: 'Compose',
      description: 'Select a folder, compose instructions, and leverage saved prompts. Preview files and review token usage before proceeding.',
      imgSrc: `/images/compose-${theme}.png`,
      alt: 'Compose view',
    },
    {
      title: 'Chat',
      description: 'Interact with the AI model to generate and refine code changes. Review and merge changes after each message.',
      imgSrc: `/images/chat-${theme}.png`,
      alt: 'Chat view',
    },
    {
      title: 'Review',
      description: 'Examine generated changes, accept modifications individually or all at once, and save everything to your disk.',
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

  return (
    <section id="features" className="features">
      <h2>How It Works</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <img
              src={feature.imgSrc}
              alt={feature.alt}
              className="feature-image"
              onClick={() => openModal(feature.imgSrc, feature.alt)}
            />
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