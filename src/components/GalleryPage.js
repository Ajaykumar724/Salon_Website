// src/components/GalleryPage.js
import React from 'react';
import './Gallery.css'; // We will create this next

// 1. IMPORT your gallery images
// (Make sure to add your images to the src/assets folder first)
import galleryImg1 from '../assets/g1.jpg'; // Example path
import galleryImg2 from '../assets/g2.png';
import galleryImg3 from '../assets/g3.png';
import galleryImg4 from '../assets/g4.jpg';
import galleryImg5 from '../assets/g5.jpg';
import galleryImg6 from '../assets/g6.png';
import galleryImg7 from '../assets/g7.jpg';
import galleryImg8 from '../assets/g8.jpg';
import galleryImg9 from '../assets/g9.jpg';
import galleryImg10 from '../assets/g10.jpg';
import galleryImg11 from '../assets/g11.jpg';
import galleryImg12 from '../assets/g12.jpg';
// import galleryImg13 from '../assets/g13.png';
// import galleryImg14 from '../assets/g14.png';


// 2. Define your gallery image data
const galleryImages = [
  { id: 1, imageUrl: galleryImg9, altText: 'Blonde balayage hair' },
  { id: 2, imageUrl: galleryImg11, altText: 'Sharp mens fade' },
  { id: 3, imageUrl: galleryImg6, altText: 'Vibrant red hair color' },
  { id: 4, imageUrl: galleryImg3, altText: 'Elegant bridal updo' },
  { id: 5, imageUrl: galleryImg5, altText: 'Modern curly hairstyle' },
  { id: 6, imageUrl: galleryImg1, altText: 'Classic straight haircut' },
  { id: 7, imageUrl: galleryImg2, altText: 'M1' },
  { id: 8, imageUrl: galleryImg8, altText: 'M2' },
  { id: 9, imageUrl: galleryImg4, altText: 'M3' },
  { id: 10, imageUrl: galleryImg10, altText: 'M4' },
  { id: 11, imageUrl: galleryImg7, altText: 'M5' },
  { id: 12, imageUrl: galleryImg12, altText: 'M6' },

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