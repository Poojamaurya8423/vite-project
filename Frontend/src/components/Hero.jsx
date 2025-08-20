import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleBookTour = () => {
    window.location.href = '/booking';
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Sankar Milan Vatika</h1>
        <p className="hero-subtitle">
          Where Dreams Begin and Memories Last Forever
        </p>
        <h1 className="text-3xl font-bold text-white tracking-wider" style={{ fontFamily: 'serif' }}>
              🪔 संकर मिलन वाटिका 🪔
            </h1>
            <p className="text-yellow-200 text-sm">जहाँ सपने शुरू होते हैं और यादें हमेशा के लिए बनी रहती हैं</p>
        <p className="hero-description">
          Experience the perfect blend of natural beauty and elegant sophistication 
          at our premium marriage lawn venue. Create unforgettable moments in our 
          lush green spaces designed for your special day.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleBookTour}>Book a Tour</button>
          <button className="btn btn-secondary"> <a href='#gallery'>View Gallery</a></button>
        </div>
      </div>
      <div className="hero-features">
        <div className="feature">
          <span className="feature-number">500+</span>
          <span className="feature-text">Guests Capacity</span>
        </div>
        <div className="feature">
          <span className="feature-number">1 Acres</span>
          <span className="feature-text">Lush Green Lawn</span>
        </div>
        <div className="feature">
          <span className="feature-number">24/7</span>
          <span className="feature-text">Support Available</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
