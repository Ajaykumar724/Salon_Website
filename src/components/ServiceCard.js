// src/components/ServiceCard.js
import React, { useState } from 'react';
import './Services.css'; // Uses the same CSS file

function ServiceCard({ title, description, imageUrl }) {
  // 1. Use React state to track if the card is being hovered
  const [isHovered, setIsHovered] = useState(false);

  return (
    // 2. Add event handlers to the main card container
    <div
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} className="service-image" />

      {/* 3. The Overlay: We change its opacity based on the isHovered state */}
      <div
        className="service-overlay"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        <h3 className="overlay-title">{title}</h3>
        <p className="overlay-description">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;