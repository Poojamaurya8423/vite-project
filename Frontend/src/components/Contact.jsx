import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We'd love to hear from you. Reach out for your special events and bookings
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Visit Us</h3>
                <p>Madhupur - Majhui Rd<br/>Madhupur, Majhui, Uttar Pradesh 231216</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <p>
                  <a href="tel:08840249641">+91 88402 49641</a>
                </p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:info@sankarmilanvatika.com">info@sankarmilanvatika.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3 className="form-title">Send us a message</h3>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your event..." rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-map-container">
          <h3 className="map-title">Find Us Here</h3>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.123456789!2d83.1234567!3d25.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA4M8KwMDcnMjQuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sankar Milan Vatika Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
