import React, { useEffect, useState } from 'react';

const TrendingSection = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [latestShows, setLatestShows] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/movies?_limit=8')
      .then(response => response.json())
      .then(data => {
        setTrendingMovies(data);
      });


    fetch('http://localhost:3000/tvshows?_limit=8')
      .then(response => response.json())
      .then(data => {
        setTrendingShows(data);
      });


    fetch('http://localhost:3000/movies?_limit=16')
      .then(response => response.json())
      .then(data => {
        setLatestMovies(data);
      });


    fetch('http://localhost:3000/tvshows?_limit=16')
      .then(response => response.json())
      .then(data => {
        setLatestShows(data);
      });
  }, []);

  return (
    <div className="trending-section">
      <div className="trending-movies">
        <h2>Trending Movies</h2>
        <div className="card-container">
          {trendingMovies.map(movie => (
            <div key={movie.id} className="card">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.runtime}</p>
              <p>{movie.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="trending-shows">
        <h2>Trending Tv Shows</h2>
        <div className="card-container">
          {trendingShows.map(show => (
            <div key={show.id} className="card">
              <img src={show.poster} alt={show.title} />
              <h3>{show.title}</h3>
              <p>{show.runtime}</p>
              <p>{show.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="latest-movies">
        <h2>Latest Movies</h2>
        <div className="card-container">
          {latestMovies.map(movie => (
            <div key={movie.id} className="card">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.runtime}</p>
              <p>{movie.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="latest-shows">
        <h2>Latest Tv Shows</h2>
        <div className="card-container">
          {latestShows.map(show => (
            <div key={show.id} className="card">
              <img src={show.poster} alt={show.title} />
              <h3>{show.title}</h3>
              <p>{show.runtime}</p>
              <p>{show.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
