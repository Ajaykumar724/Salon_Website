// src/components/StylistCard.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import the icon
import './Stylists.css'; // Uses the same CSS file

function StylistCard({ stylist }) {
  // Destructure the props for easier use
  const { name, role, bio, imageUrl, instagramUrl } = stylist;

  return (
    <div className="stylist-card">
      <div className="stylist-image-container">
        <img src={imageUrl} alt={name} className="stylist-image" />
      </div>
      <div className="stylist-info">
        <h3 className="stylist-name">{name}</h3>
        <p className="stylist-role">{role}</p>
        <p className="stylist-bio">{bio}</p>

        {/* 3. Conditionally render social link if it exists */}
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="stylist-social-link"
            aria-label={`${name}'s Instagram`}
          >
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
}

export default StylistCard;