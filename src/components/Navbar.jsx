import React from 'react';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        Brand
      </div>

      {/* Button Section */}
      <button className="navbar-button">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;