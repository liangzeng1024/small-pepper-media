import React from 'react';
import './Footer.css'; // Import the CSS for the footer styles

const Footer = () => {
  return (
    <section id="footerSection">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 Small Pepper Media. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/YourPage" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
