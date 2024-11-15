import React from 'react';
import './PortfolioSection.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const portfolioItems = [
  {
    id: 1,
    type: 'youtube',
    url: 'https://www.youtube.com/embed/n13_iPdrEWc', // Embed URL for YouTube
    alt: 'Portfolio Video 1',
  },
  {
    id: 2,
    type: 'youtube', // Type is video
    url: 'https://www.youtube.com/embed/KY_eRiyP-V0', // 
    alt: 'Portfolio Video 2',
  },
  {
    id: 3,
    type: 'youtube', // Type is video
    url: 'https://www.youtube.com/embed/yL_WUZHeqYk', // Reference the video file in public/videos
    alt: 'Portfolio Video 3',
  },
  {
    id: 4,
    type: 'youtube', // Type is video
    url: 'https://www.youtube.com/embed/yh7g35cjmg0', // Reference the video file in public/videos
    alt: 'Portfolio Video 4',
  },
  {
    id:5 ,
    type: 'youtube', // Type is video
    url: 'https://www.youtube.com/embed/ii6VIkR1OBo', // Reference the video file in public/videos
    alt: 'Portfolio Video 5',
  },
  {
    id:6 ,
    type: 'youtube', // Type is video
    url: 'https://www.youtube.com/embed/9OQQE9r9PuQ', // Reference the video file in public/videos
    alt: 'Portfolio Video 6',
  }
  // Add more items as needed
];

const responsive = {
  superLarge: {
    // screens size > 1920
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  large: {
    // screens size > 1600
    breakpoint: { max: 1920, min: 768 },
    items: 3,
  },
  medium: {
    // screens size > 1200
    breakpoint: { max: 768, min: 480 },
    items: 2,
  },
  small: {
    // screens size > 0
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {portfolioItems.map((item) => (
          <div className="portfolio-item" key={item.id}>
            {item.type === 'photo' ? (
              <img src={item.url} alt={item.alt} className="portfolio-image" />
            ) : item.type === 'youtube' ? (
              <iframe
                className="portfolio-video"
                src={item.url}
                title={item.alt}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls className="portfolio-video">
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioSection;
