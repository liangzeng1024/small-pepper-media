import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ClientLogoSection.css'; // Make sure to update the CSS filename if necessary

// Sample data for client logos
const clientLogos = [
  { id: 1, src: "https://stealthmedia.com/app/uploads/client-logos-CCM.svg", alt: "CCM" },
  { id: 2, src: "https://stealthmedia.com/app/uploads/client-logos-commodity-vault.svg", alt: "Commodity Vault" },
  { id: 3, src: "https://stealthmedia.com/app/uploads/client-logos-lawn-mower.svg", alt: "Lawn Mower Lager" },
  { id: 4, src: "https://stealthmedia.com/app/uploads/client-logos-moja-coffee.svg", alt: "Moja Coffee" },
  { id: 5, src: "https://stealthmedia.com/app/uploads/client-logos-schulte.svg", alt: "Schulte" },
  { id: 6, src: "https://stealthmedia.com/app/uploads/client-logos-con-pro.svg", alt: "Con-Pro Industries" },
  { id: 7, src: "https://stealthmedia.com/app/uploads/client-logos-trican.svg", alt: "Trican" },
  { id: 8, src: "https://stealthmedia.com/app/uploads/client-logos-performance-realty-dark.svg", alt: "Performance Realty" },
  { id: 9, src: "https://stealthmedia.com/app/uploads/logo-titan-logix.svg", alt: "Titan Logix" },
  { id: 10, src: "https://stealthmedia.com/app/uploads/logo-mland-long.png", alt: "Millennium Land Ltd." },
];

const ClientLogoSection = () => {
  return (
    <div className="client-logo-section">
      <h2>Our Clients</h2>
      <Carousel
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 1500 },
            items: 6
          },
          desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 4
          },
          tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
          },
          mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2
          },
        }}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={true}
        showDots={true}
        keyBoardControl={true}
        renderButtonGroupOutside={true}
      >
        {clientLogos.map(logo => (
          <div key={logo.id} className="logo-item">
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ClientLogoSection;
