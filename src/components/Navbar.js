import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
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
        <p>✨ GRAND OPENING: GET 25% OFF ALL SERVICES! USE CODE: SALON25 ✨</p>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <a href="/">
            <img src={salonLogo} alt="Salon Logo" />
          </a>
        </div>

        {/* Navigation Links - class changes based on mobile menu state */}
        <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
          <li><a href="/services">Services</a></li>
          <li><a href="/stylists">Stylists</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className="book-now-li"><a href="/booking" className="book-now-btn">BOOK NOW</a></li>
        </ul>

        <div className="nav-icons">
          <a href="/search" aria-label="Search"><FaSearch /></a>
          <a href="/account" aria-label="My Account"><FaUser /></a>
          <a href="/cart" aria-label="Shopping Cart"><FaShoppingBag /></a>
        </div>

        {/* Mobile Menu Toggle Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;