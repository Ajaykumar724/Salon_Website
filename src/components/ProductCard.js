// src/components/ProductCard.js
import React from 'react';
import './Products.css'; // Uses the same CSS file

function ProductCard({ product }) {
  const { name, brand, description, imageUrl } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <p className="product-brand">{brand}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-link">Available in Salon</div>
      </div>
    </div>
  );
}

export default ProductCard;