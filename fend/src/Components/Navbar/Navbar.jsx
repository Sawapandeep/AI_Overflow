import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/about">About</a></li>
        <li className="nav-item"><a href="/services">Services</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
