import React, { useState } from 'react';
import './Navigation.css';
import logo from '../src/assets/Logo .svg';

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <nav className={`navbar ${menuIsOpen ? "open" : ""}`}>
      <a href='/' className='logo'>
        <img src={logo} alt='logo' />
      </a>
      {/* Mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <ul className={`nav-links ${menuIsOpen ? "visible" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
        {/* Add more as per your website structure */}
      </ul>
    </nav>
  );
};

export default Navigation;