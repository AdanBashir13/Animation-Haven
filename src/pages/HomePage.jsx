import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TrendingSection = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [latestShows, setLatestShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies?_limit=8')
      .then(response => response.json())
      .then(data => setTrendingMovies(data));

    fetch('http://localhost:3000/tvshows?_limit=8')
      .then(response => response.json())
      .then(data => setTrendingShows(data));

    fetch('http://localhost:3000/movies?_limit=16')
      .then(response => response.json())
      .then(data => setLatestMovies(data));

    fetch('http://localhost:3000/tvshows?_limit=16')
      .then(response => response.json())
      .then(data => setLatestShows(data));
  }, []);

  return (
    <div className="trending-section">
      <header>
        <Navbar />
      </header>

      <div className="trending-movies">
        <h2>Trending Movies</h2>
        <div className="card-container">
          {trendingMovies.map(movie => (
            <div key={movie.id} className="card">
              <Link to="/login">
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.runtime}</p>
                <p>{movie.releaseDate}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="trending-shows">
        <h2>Trending TV Shows</h2>
        <div className="card-container">
          {trendingShows.map(show => (
            <div key={show.id} className="card">
              <Link to="/login">
                <img src={show.poster} alt={show.title} />
                <h3>{show.title}</h3>
                <p>{show.runtime}</p>
                <p>{show.releaseDate}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="latest-movies">
        <h2>Latest Movies</h2>
        <div className="card-container">
          {latestMovies.map(movie => (
            <div key={movie.id} className="card">
              <Link to="/login">
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.runtime}</p>
                <p>{movie.releaseDate}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="latest-shows">
        <h2>Latest TV Shows</h2>
        <div className="card-container">
          {latestShows.map(show => (
            <div key={show.id} className="card">
              <Link to="/login">
                <img src={show.poster} alt={show.title} />
                <h3>{show.title}</h3>
                <p>{show.runtime}</p>
                <p>{show.releaseDate}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TrendingSection;
