// src/components/ServicesPage.js
import React from 'react';
import ServiceCard from './ServiceCard'; // We will create this next
import './Services.css'; // We will create this last
import image1 from '../assets/bridal_makeup_card5.jpg';
import image2 from '../assets/makeup_card2.jpg';
import image3 from '../assets/facial_card6.jpg';
import image4 from '../assets/hair_card1.jpg';
import image5 from '../assets/manicure_card3.jpg';
import image6 from '../assets/waxing_card4.jpg';
import image7 from '../assets/mendhi_card7.jpg';
//import image1 from '../assets/bridal_makeup_card5.jpg';

// 1. Define your services data
// You can replace these with your actual data and images
const servicesData = [
  {
    id: 1,
    title: 'Signature Makeup',
    description: 'Modern styles, classic cuts, and complete transformations.',
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Party Unique Makeup',
    description: 'Convert your looks int pretty, using premium products.',
    imageUrl: image2,
  },
  {
    id: 3,
    title: 'Mendhi',
    description: 'Trending all type of mendhi styles.',
    imageUrl: image7,
  },
  {
    id: 4,
    title: 'Hair Treatments',
    description: 'Modern styles, classic cuts, and complete transformations.',
    imageUrl:image4,
  },
  {
    id: 5,
    title: 'Maniure',
    description: 'Perfect nails for any occasion. Pamper your hands.',
    imageUrl:image5,
  },
  {
    id: 6,
    title: 'Waxing',
    description: 'Give the best services, provided by us.',
    imageUrl:image6,
  },
  {
    id: 7,
    title: 'Relief Facials',
    description: 'Relax and rejuvenate with our signature spa treatments.',
    imageUrl: image3,
  },
];

function ServicesPage() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        We offer a wide range of services to make you look and feel your best.
      </p>

      {/* 2. This container will hold all your service cards */}
      <div className="services-container">
        {/* 3. We loop over the data and create a card for each service */}
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;