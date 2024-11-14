import React, { useState } from 'react';
import './PriceSection.css';

const PriceSection = () => {
  // State to track the selected tab
  const [activeTab, setActiveTab] = useState('individuals');

  return (
    <section className="price-section">
      <div className="tab-container">
        <button
          className={`tab ${activeTab === 'individuals' ? 'active' : ''}`}
          onClick={() => setActiveTab('individuals')}
        >
          Individuals
        </button>
        <button
          className={`tab ${activeTab === 'business' ? 'active' : ''}`}
          onClick={() => setActiveTab('business')}
        >
          Business
        </button>
      </div>

      <div className="content-container">
        {activeTab === 'individuals' && (
          <div className="pricing-content">
            <h2>Individual Plans</h2>
            <p>Choose a plan that works best for personal projects and freelancers.</p>
            <ul>
              <li>Plan 1: $20/month</li>
              <li>Plan 2: $50/month</li>
              <li>Plan 3: $75/month</li>
            </ul>
          </div>
        )}
        {activeTab === 'business' && (
          <div className="pricing-content">
            <h2>Business Plans</h2>
            <p>Perfect for businesses and teams needing collaboration tools.</p>
            <ul>
              <li>Plan 1: $40/month per user</li>
              <li>Plan 2: $100/month per user</li>
              <li>Plan 3: $200/month per user</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default PriceSection;
