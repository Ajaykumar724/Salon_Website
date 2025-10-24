import React from 'react';
// 1. Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';

// 2. Import your page components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // The component we just made
import ServicesPage from './components/ServicesPage'; // The component I gave you before
import StylistsPage from './components/StylistsPage'; // The component I gave you before
import GalleryPage from './components/GalleryPage'; // The component I gave you before
import ProductsPage from './components/ProductsPage'; // The component I gave you before
import ContactPage from './components/ContactPage'; // The component I gave you before

// Make sure you have this bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* 3. Navbar is outside <Routes>, so it appears on EVERY page */}
      <Navbar />

      {/* 4. <Routes> will switch between your page components */}
      <Routes>
        {/* When the path is "/", show the HomePage component */}
        <Route path="/" element={<HomePage />} />

        {/* When the path is "/services", show the ServicesPage component */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/stylists" element={<StylistsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* You can add your other routes here later */}
        {/* <Route path="/stylists" element={...} /> */}
        {/* <Route path="/gallery" element={...} /> */}
      </Routes>

      {/* You can also add a <Footer /> component here, outside <Routes> */}
    </div>
  );
}

export default App;