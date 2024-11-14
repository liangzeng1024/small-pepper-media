// src/utils/FeaturedServicesTab/FeaturedServicesTab.jsx

import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './FeaturedServices.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    id: 'branding-VI-design',
    name: 'Branding and Visual Design',
    image: '/serviceimage/branding-design.png',
    description: 'Creating a strong brand identity with custom visual designs.',
    price: '$999',
  },
  {
    id: 'social-media-management',
    name: 'Social Media Management',
    image: '/serviceimage/social-media-management.jpg',
    description: 'Grow your online presence with expert social media strategies.',
    price: '$999',
    
  },
  {
    id: 'photography',
    name: 'Product and Portrait Photography',
    image: '/serviceimage/photography.png',
    description: 'Capture high-quality photos that make a lasting impression.',
    price: '$350',
  },
];

function FeaturedServices({ onAddToCart }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();


  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleShowDetails = (id) => {
    navigate(`/services/${id}`);
  };

  const handleAddToCart = (service) => {
    onAddToCart(service);
  };

  return (
    <div className="featured-services-container">
      <Typography variant="h4" className="featured-services-title">
        Featured Services
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
        className="featured-services-tabs"
      >
        {services.map((service, index) => (
          <Tab key={index} label={service.name} />
        ))}
      </Tabs>

      <div className="featured-service-card-container">
        {services.map((service, index) => (
          selectedTab === index && (
            <Card key={index} className="featured-service-card">
              <CardMedia
                component="img"
                image={service.image}
                alt={service.name}
              />
              <CardContent>
                <Typography gutterBottom className="featured-service-card-title">
                  {service.name}
                </Typography>
                <Typography className="featured-service-card-description">
                  {service.description}
                </Typography>
                <Typography className="featured-service-price">
                  Starts From {service.price}
                </Typography>
                <div className="button-group">
                  <Button
                    onClick={() => handleShowDetails(service.id)}
                    className="show-details-button"
                  >
                    Show Details
                  </Button>
                  <Button
                    onClick={() => handleAddToCart(service)}
                    className="add-to-cart-button"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        ))}
      </div>
    </div>
  );
}

export default FeaturedServices;
