// src/components/ProductsPage.js
import React from 'react';
import ProductCard from './ProductCard'; // We will create this
import './Products.css'; // We will create this

// 1. IMPORT your product images
import prodImg1 from '../assets/p1.jpg'; // Example path
import prodImg2 from '../assets/p2.jpg';
import prodImg3 from '../assets/p3.jpg';

// 2. Define your products data
const productsData = [
  {
    id: 1,
    name: 'Nail paints',
    brand: 'Multiple brands',
    description: 'Infused with 100% pure and shine.',
    imageUrl: prodImg1,
  },
  {
    id: 2,
    name: 'Winter Moisturizer Cream',
    brand: 'Multiple brands',
    description: 'Get perfect for all the of skins.',
    imageUrl: prodImg2,
  },
  {
    id: 3,
    name: 'Lipstick',
    brand: 'Multiple brands',
    description: 'Swipe on confidence with every shade of our luxe, long-lasting lipstick.',
    imageUrl: prodImg3,
  },
  // Add more products as needed
];

function ProductsPage() {
  return (
    <div className="products-page">
      <h1 className="products-page-title">Shop Our Favorites</h1>
      <p className="products-page-subtitle">
        Premium products, curated by our stylists, available in-salon.
      </p>

      {/* 3. This container will hold all your product cards */}
      <div className="products-container">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;