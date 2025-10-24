import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import salonLogo from '../assets/logo.png'; // Make sure to place your logo in src/assets

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Top Promotion Banner */}
      <div className="promo-banner">
        <p style={{fontSize:"15px", fontWeight:"700"}}>✨ Get 25% OFF on every service at <span style={{fontWeight:"900"}}>Nisha Beauty Salon</span> — your beauty, our passion! ✨</p>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="nav-logo ms-4">
          <a href="/">
            <img src={salonLogo} alt="Salon Logo" />
          </a>
        </div>

        {/* Navigation Links - class changes based on mobile menu state */}
        <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
          <li><a style={{textDecoration:"none"}} href="/services">Services</a></li>
          <li><a style={{textDecoration:"none"}} href="/stylists">Stylists</a></li>
          <li><a style={{textDecoration:"none"}} href="/gallery">Gallery</a></li>
          <li><a style={{textDecoration:"none"}} href="/products">Products</a></li>
          <li><a style={{textDecoration:"none"}} href="/contact">Contact</a></li>
          <li className="book-now-li"><a style={{textDecoration:"none"}} href="https://chat.whatsapp.com/JZ4K18MiQmp1ekl1I1EuFl" className="book-now-btn">BOOK NOW</a></li>
        </ul>


        {/* Mobile Menu Toggle Icon */}
        <div className="menu-icon me-4" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;