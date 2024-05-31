import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// State variables to hold fetched data
const MoviesPage = () => {
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [fantasyMovies, setFantasyMovies] = useState([]);
  const [educationalMovies, setEducationalMovies] = useState([]);

  // Fetching data from local api Endpoints with useEffect
  useEffect(() => {
    fetch('http://localhost:3000/adventureMovies')
      .then(response => response.json())
      .then(data => setAdventureMovies(data));

    fetch('http://localhost:3000/dramaMovies')
      .then(response => response.json())
      .then(data => setDramaMovies(data));

    fetch('http://localhost:3000/fantasyMovies')
      .then(response => response.json())
      .then(data => setFantasyMovies(data));

    fetch('http://localhost:3000/educationalMovies')
      .then(response => response.json())
      .then(data => setEducationalMovies(data));
  }, []);

  return (
    <div className="movies-page">
      <header>
        <Navbar />
      </header>

      <div className="section adventure-movies">
        <h2>Adventure Movies</h2>
        <div className="card-container">
          {adventureMovies.map(movie => (
            <div key={movie.id} className="card">

              {/* Link to navigate to signup page */}
              <Link to="/login">
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

      {/* Drama movies section */}
      <div className="section drama-movies">
        <h2>Drama Movies</h2>
        <div className="card-container">
          {dramaMovies.map(movie => (
            <div key={movie.id} className="card">
              <Link to="/login">
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

{/* fantasy movies section */}
      <div className="section fantasy-movies">
        <h2>Fantasy Movies</h2>
        <div className="card-container">
          {fantasyMovies.map(movie => (
            <div key={movie.id} className="card">
              <Link to="/login">
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

{/*Educational movies section  */}
      <div className="section educational-movies">
        <h2>Educational Movies</h2>
        <div className="card-container">
          {educationalMovies.map(movie => (
            <div key={movie.id} className="card">
              <Link to="/login">
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

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MoviesPage;
