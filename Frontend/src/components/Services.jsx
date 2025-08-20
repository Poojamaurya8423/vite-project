import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🌸',
      title: 'Garden Wedding Setup',
      description: 'Beautiful floral arrangements and natural decorations that complement our lush green lawn.'
    },
    {
      icon: '🎪',
      title: 'Marquee & Tent Services',
      description: 'Elegant tent setups for all weather conditions with premium lighting and draping.'
    },
    {
      icon: '🍽️',
      title: 'Catering Services',
      description: 'Professional catering with customizable menus featuring local and international cuisines.'
    },
    {
      icon: '🎵',
      title: 'Sound & Lighting',
      description: 'State-of-the-art sound systems and ambient lighting to create the perfect atmosphere.'
    },
    {
      icon: '📸',
      title: 'Photography Spots',
      description: 'Multiple picturesque locations throughout the venue for stunning wedding photography.'
    },
    {
      icon: '🚗',
      title: 'Parking & Security',
      description: 'Ample parking space for 200+ vehicles with 24/7 security surveillance.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Everything you need for your perfect wedding day
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
