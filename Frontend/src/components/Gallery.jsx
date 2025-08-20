import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Beautiful wedding setup at Sankar Milan Vatika",
      title: "Elegant Wedding Setup"
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/p/AF1QipOhRevniLSDrpDCG3WYlLSYr46N3Eda46z7FWqc=w141-h101-n-k-no-nu",
      alt: "Lush green lawn at Sankar Milan Vatika",
      title: "Lush Green Lawn"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Wedding decorations at Sankar Milan Vatika",
      title: "Beautiful Decorations"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Evening wedding ceremony at Sankar Milan Vatika",
      title: "Evening Ceremony"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Outdoor wedding venue at Sankar Milan Vatika",
      title: "Outdoor Venue"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Wedding reception setup at Sankar Milan Vatika",
      title: "Reception Setup"
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">Our Beautiful Venue Gallery</h2>
          <p className="section-subtitle">
            Discover the enchanting spaces and magical moments at Sankar Milan Vatika. 
            From elegant wedding setups to lush green landscapes, explore how we transform dreams into reality.
          </p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
