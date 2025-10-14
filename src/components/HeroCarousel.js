import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HeroCarousel.css'; // We'll create this file for custom styling

// Import your images here. Create an 'assets' folder in 'src' if you don't have one.
import slide1 from '../assets/slide_1.jpg';
import slide2 from '../assets/slide_2.jpg';
import slide3 from '../assets/slide_3.jpg';

const HeroCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={slide1} // Replace with your actual image
          alt="Luxury Hair Styling"
        />
        <Carousel.Caption>
          <h3>Luxury Hair Styling</h3>
          <p>Experience the art of hair with our master stylists.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={slide2} // Replace with your actual image
          alt="Relaxing Spa Treatments"
        />
        <Carousel.Caption>
          <h3>Relaxing Spa Treatments</h3>
          <p>Rejuvenate your body and soul in our serene environment.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={slide3} // Replace with your actual image
          alt="Professional Manicures"
        />
        <Carousel.Caption>
          <h3>Professional Manicures & Pedicures</h3>
          <p>Perfect nails for the perfect occasion.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;