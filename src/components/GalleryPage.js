// src/components/GalleryPage.js
import React from 'react';
import './Gallery.css'; // We will create this next

// 1. IMPORT your gallery images
// (Make sure to add your images to the src/assets folder first)
import galleryImg1 from '../assets/g1.jpg'; // Example path
import galleryImg2 from '../assets/g2.png';
import galleryImg3 from '../assets/g3.png';
import galleryImg4 from '../assets/g4.jpg';
import galleryImg5 from '../assets/g5.png';
import galleryImg6 from '../assets/g6.png';

// 2. Define your gallery image data
const galleryImages = [
  { id: 1, imageUrl: galleryImg1, altText: 'Blonde balayage hair' },
  { id: 2, imageUrl: galleryImg2, altText: 'Sharp mens fade' },
  { id: 3, imageUrl: galleryImg3, altText: 'Vibrant red hair color' },
  { id: 4, imageUrl: galleryImg4, altText: 'Elegant bridal updo' },
  { id: 5, imageUrl: galleryImg5, altText: 'Modern curly hairstyle' },
  { id: 6, imageUrl: galleryImg6, altText: 'Classic straight haircut' },
  // Add as many more as you like
];

function GalleryPage() {
  return (
    <div className="gallery-page">
      <h1 className="gallery-page-title">Our Lookbook</h1>
      <p className="gallery-page-subtitle">
        Inspiration from our talented stylists and happy clients.
      </p>

      {/* 3. This container will hold all your gallery images */}
      <div className="gallery-container">
        {galleryImages.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img
              src={image.imageUrl}
              alt={image.altText}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;