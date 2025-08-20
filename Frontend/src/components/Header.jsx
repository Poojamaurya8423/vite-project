import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Sankar Milan Vatika</h1>
         <center><p>Marriage Lawn & Venue</p></center> 
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#gallery">Gallery</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/booking">Book Tour</a></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
