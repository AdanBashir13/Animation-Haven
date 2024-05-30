import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src='./images/Animation-Haven-1.png' />
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#home">TV Shows</a></li>
        <li><a href="#top-rated">Top Rated</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
