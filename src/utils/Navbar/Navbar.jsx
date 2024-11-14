import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="logo-container">
        {/* Referencing the logo from the public folder */}
        <img src="/logo.png" alt="Small Pepper Media" className="logo" />
      </div>
      
      {/* Navigation menu */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
