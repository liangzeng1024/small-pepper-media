// src/utils/ServiceGallery/ServiceGallery.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const services = [
  { name: "Web Design", image: "web-design.jpg", price: "299.99", description: "Professional web design service." },
  { name: "Video Production", image: "video-production.jpg", price: "499.99", description: "High-quality video production." },
  { name: "Social Media Management", image: "social-media.jpg", price: "199.99", description: "Comprehensive social media management." },
  // Add more services as needed
];

const ServicesSection = () => {
  return (
    <div className="service-gallery">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesSection;
