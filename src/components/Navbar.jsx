import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src='./images/Animation-Haven-1.png' alt="Animation Haven Logo" />
      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
        <li><NavLink to="/tvshows">TV Shows</NavLink></li>
        <li><NavLink to="/top-rated">Top Rated</NavLink></li>
        <li><a href="#search">Search</a></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
