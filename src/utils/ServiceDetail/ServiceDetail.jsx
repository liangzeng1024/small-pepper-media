// src/utils/ServiceDetail/ServiceDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './ServiceDetail.css';

const services = [
  {
    id: 'web-design',
    name: 'Web Design and Development',
    image: '/serviceimage/web-design.jpg',
    description: 'Crafting custom websites that are fast, responsive, and visually engaging.',
    price: '$1999',
  },
  {
    id: 'video-production',
    name: 'Video Shooting and Production',
    image: '/serviceimage/video-production.jpg',
    description: 'High-quality video production tailored to showcase your brand.',
    price: '$799',
  },
  {
    id: 'business-plan',
    name: 'Business Plan Writing',
    image: '/serviceimage/business-plan.jpg',
    description: 'Professional business plans to help your venture succeed.',
    price: '$1999',
  },
  {
    id: 'branding-design',
    name: 'Branding and Visual Design',
    image: '/serviceimage/branding-design.jpg',
    description: 'Creating a strong brand identity with custom visual designs.',
    price: '$999',
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    image: '/serviceimage/social-media.jpg',
    description: 'Grow your online presence with expert social media strategies.',
    price: '$999',
  },
  {
    id: 'photography',
    name: 'Product and Portrait Photography',
    image: '/serviceimage/photography.jpg',
    description: 'Capture high-quality photos that make a lasting impression.',
    price: '$349',
  },
];

function ServiceDetail() {
  const { serviceName } = useParams();

  // Find the service based on the serviceName parameter
  const service = services.find(
    (s) => s.name.toLowerCase().replace(/ /g, '-') === serviceName
  );

  if (!service) {
    return <Typography variant="h5">Service not found.</Typography>;
  }

  return (
    <div className="service-detail">
      <img src={service.image} alt={service.name} className="service-detail-image" />
      <Typography variant="h4" className="service-detail-title">{service.name}</Typography>
      <Typography className="service-detail-description">{service.description}</Typography>
      <Typography variant="h6" className="service-detail-price">{service.price}</Typography>
      <Button variant="contained" color="primary">Add to Cart</Button>
    </div>
  );
}

export default ServiceDetail;
