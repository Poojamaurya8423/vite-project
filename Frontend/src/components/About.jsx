import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Sankar Milan Vatika</h2>
            <p className="about-description">
              Nestled in the heart of nature, Sankar Milan Vatika is a premier marriage lawn venue
              that has been creating magical wedding experiences for over a decade. Our sprawling 
              2-acre lush green lawn provides the perfect canvas for your dream wedding.
            </p>
            <p className="about-description">
              We believe every love story deserves a beautiful beginning. Our dedicated team 
              works tirelessly to ensure your special day is nothing short of perfection, 
              with attention to every detail and personalized service that exceeds expectations.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🌟</div>
                <div>
                  <h3>Newly Opened</h3>
                  <p>Fresh, modern marriage lawn with latest amenities</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌿</div>
                <div>
                  <h3>Natural Beauty</h3>
                  <p>Surrounded by lush greenery and flowers</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <div>
                  <h3>Expert Team</h3>
                  <p>Professional wedding planners and staff</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipMe1tFc7iQQ21DiI9oyukNFqQviCDE1izUkEJ60=s680-w680-h510-rw" 
              alt="Sankar Milan Vatika Lawn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
