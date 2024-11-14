// src/utils/HeroSection/HeroSection.jsx

import React from 'react';
import './HeroSection.css';  // Import the CSS file for additional styling

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'url(/hero-background.jpg)',  // Correct path to the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  // Full viewport height
        display: 'flex',  // Flexbox to center content
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',  // White text color
        textAlign: 'left'
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Small Pepper Media</h1>
        <p className="hero-subtitle">
        Your one-stop solution for modern digital marketing
        </p>
        <p className="hero-description">
          Websites, advertising, and video productions that sell!
        </p>
        <button className="cta-button">How Can We Help?</button>
      </div>
    </section>
  );
};

export default HeroSection;
