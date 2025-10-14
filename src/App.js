import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel'; // Import the new component
// Add this line at the top of src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
// import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCarousel /> {/* Place the carousel right here */}
      
      {/* The rest of your website content goes here */}
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Our Salon!</h1>
        <p>This is the main content area of the page, below the carousel.</p>
      </main>
    </div>
  );
}

export default App;