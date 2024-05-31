import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TopRatedPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedShows, setTopRatedShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setTopRatedMovies(data));

    fetch('http://localhost:3000/tvshows')
      .then(response => response.json())
      .then(data => setTopRatedShows(data));
  }, []);

  return (
    <div className="home-page">
      <header>
        <Navbar />
      </header>

      <div className="trending-section">
        <div className="section trending-movies">
          <h2>Top Rated Movies</h2>
          <div className="card-container">
            {topRatedMovies.map(movie => (
              <div key={movie.id} className="card">
                <Link to={`/movies/${movie.id}`}>
                  <img src={movie.poster} alt={movie.title} />
                  <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <p>{movie.runtime}</p>
                    <p>{movie.releaseDate}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="section trending-shows">
          <h2>Top Rated Shows</h2>
          <div className="card-container">
            {topRatedShows.map(show => (
              <div key={show.id} className="card">
                <Link to={`/shows/${show.id}`}>
                  <img src={show.poster} alt={show.title} />
                  <div className="show-details">
                    <h3>{show.title}</h3>
                    <p>{show.season}</p>
                    <p>{show.releaseDate}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TopRatedPage;
