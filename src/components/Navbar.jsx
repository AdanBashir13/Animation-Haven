import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  useEffect(() => {

    // Function to do mouse enter event
    const handleMouseEnter = (event) => {
      const hoverText = event.target.getAttribute('hover-text');
      event.target.setAttribute('original-text', event.target.textContent);
      event.target.textContent = hoverText;
    };

    // Function to do mouse leave event
    const handleMouseLeave = (event) => {
      const originalText = event.target.getAttribute('original-text');
      event.target.textContent = originalText;
    };

    // Selects all links with the classes
    const links = document.querySelectorAll('.navbar-links a, .navbar-links NavLink');

    // Add event listeners for mouse enter and mouse leave to each link
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    // removes event listeners
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);


  return (
    <nav className="navbar">
      <img src='./images/Animation-Haven-1.png' alt="Animation Haven Logo" />
      <ul className="navbar-links">
        {/* Navigation links with hover-text attribute */}
        <li><NavLink to="/" hover-text="🏠">Home</NavLink> </li>
        <li><NavLink to="/movies" hover-text="🎬">Movies</NavLink></li>
        <li><NavLink to="/tvshows" hover-text="📺">TV Shows</NavLink></li>
        <li><NavLink to="/top-rated" hover-text="🥇">Top Rated</NavLink></li>
        <li><NavLink to="/login" hover-text="👤">Signup</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
