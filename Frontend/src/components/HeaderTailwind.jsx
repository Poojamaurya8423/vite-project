import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <h1 className="text-2xl font-bold text-amber-800">Sankar Milan Vatika</h1>
            <p className="text-sm text-gray-600">Marriage Lawn & Venue</p>
          </div>
          
          <nav className={`hidden md:block`}>
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">About</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">Services</a></li>
              <li><a href="#gallery" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">Gallery</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">Contact</a></li>
            </ul>
          </nav>

          <button 
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={toggleMenu}
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">About</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">Services</a></li>
              <li><a href="#gallery" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">Gallery</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
