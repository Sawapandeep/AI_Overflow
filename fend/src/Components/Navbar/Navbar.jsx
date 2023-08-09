import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
         <div className="burger-button">&#9776;</div>
      <div className="nav-logo">Stack <b>Overflow</b></div>
      <div className="nav-text">Product</div>
      <div className="nav-links">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">Search</button>
        </div>
        < div className="nav-menu">
         
          <button className="login-button">Login</button> 
          <a href="/signup"><button className="signup-link">Signup</button></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
