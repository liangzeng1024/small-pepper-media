import React from 'react';
import './IntroductionSection.css';

const IntroductionSection = () => {
  return (
    <div 
    className="image-container"
    style={{
      Image: "url('/confusion.png')",                      
    }}>

    <div className="introduction-section">
      <div className="image-container">
        {/* Background image handled by CSS */}
      </div>
      <div className="content-wrapper">
        <h2 className="section-title">Modern Marketing Can Be Confusing</h2>
        <p className="intro-text">
          Modern marketing can be overwhelming. With endless options like Google Ads, SEO, social media influencers, and even door-to-door flyers, how do you know where to invest your marketing dollars? And, more importantly, how can you be sure it's working?
        </p>
        <p className="intro-text">
          It’s easy to get lost in the noise of consultants and agencies offering you the latest trends, while the real question often gets overlooked: <strong>Are we getting results?</strong>
        </p>
        <p className="intro-text">
          At <strong>Small Pepper Media</strong>, we focus on one thing above all else—getting you real, measurable results. We don’t just create pretty websites or chase fleeting trends. We’re about building strategies that actually bring value to your business. From targeted content marketing to website optimizations, we’re constantly monitoring, testing, and refining our approach to ensure every dollar you spend is working harder for you.
        </p>
        <p className="intro-text">
          We help you invest in what truly moves the needle. No gimmicks. No fluff. Just results.
        </p>
        <p className="cta-text">Let’s get started and make sure your marketing is driving the business growth you deserve.</p>
      </div>
    </div>
    </div>
  );
};

export default IntroductionSection;
