import React from 'react';
import HeroCarousel from './HeroCarousel';
import { Link } from 'react-router-dom';

import servicesImg from '../assets/nav-services.jpg';
import stylistsImg from '../assets/nav-stylists.jpg';
import galleryImg from '../assets/nav-gallery.jpg';
import productsImg from '../assets/nav-products.jpg';
import locationImg from '../assets/nav-location.jpg';
import contactImg from '../assets/nav-contact.jpg';

const gridItems = [
  {
    id: 1,
    title: 'Services',
    path: '/services',
    imageUrl: servicesImg,
  },
  {
    id: 2,
    title: 'Stylists',
    path: '/stylists',
    imageUrl: stylistsImg,
  },
  {
    id: 3,
    title: 'Gallery',
    path: '/gallery',
    imageUrl: galleryImg,
  },
  {
    id: 4,
    title: 'Products',
    path: '/products',
    imageUrl: productsImg,
  },
  {
    id: 5,
    title: 'Location',
    path: 'https://maps.app.goo.gl/Gj1yQEDuiTz1vV4z5',
    imageUrl: locationImg,
  },
  {
    id: 6,
    title: 'Contact',
    path: '/Contact',
    imageUrl: contactImg,
  }
];

function HomePage() {
  return (
    <> {/* Use a fragment to return multiple elements */}
      <HeroCarousel />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Our Salon!</h1>
        <div className="nav-grid-container">
        {gridItems.map((item) => (
          // 3. Each item is a Link from react-router-dom
          <Link to={item.path} key={item.id} className="grid-link">
            <img
              src={item.imageUrl}
              alt={`View our ${item.title}`}
              className="grid-link-image"
            />
            {/* 4. This overlay holds the text */}
            <div className="grid-link-overlay">
              <h3 className="grid-link-title">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      </main>
    </>
  );
}

export default HomePage;