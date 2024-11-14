import React, { useState }from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './utils/Navbar/Navbar';
import HeroSection from './utils/HeroSection/HeroSection';
import IntroductionSection from './utils/IntroductionSection/IntroductionSection';
import PriceSection from './utils/PriceSection/PriceSection';
import PortfolioSection from './utils/PortfolioSection/PortfolioSection';
import ClientLogoSection from './utils/ClientLogoSection/ClientLogoSection';
import ContactSection from './utils/ContactSection/ContactSection';
import Footer from './utils/Footer/Footer';
import ServicesSection from './utils/ServicesSection/ServicesSection';
import FeaturedServices from './utils/FeaturedServices/FeaturedServices';
import ServiceDetail from './utils/ServiceDetail/ServiceDetail';


function App() {
  // State for the cart (you can update this as per your requirements)
  const [cart, setCart] = useState([]);

  const handleAddToCart = (service) => {
    setCart((prevCart) => [...prevCart, service]); // Add the service to the cart
  };

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* <ServicesSection /> */}
      <FeaturedServices onAddToCart={handleAddToCart} />
      <IntroductionSection />
      <PortfolioSection /> 
     {/* <PriceSection /> */}
      <ClientLogoSection />
      <ContactSection />
      <Footer />

       {/* Define routes here */}
       <Routes>
        {/* Route for Service Detail Page */}
      <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
