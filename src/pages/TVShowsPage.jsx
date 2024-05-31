import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// State variable to keep fetched data
const TVShowsPage = () => {
  const [actionShows, setActionShows] = useState([]);
  const [comedyShows, setComedyShows] = useState([]);
  const [dramaShows, setDramaShows] = useState([]);
  const [fantasyShows, setFantasyShows] = useState([]);

// fetching data from local api endpoinys
  useEffect(() => {
    fetch('http://localhost:3000/actionShows')
      .then(response => response.json())
      .then(data => setActionShows(data));

    fetch('http://localhost:3000/comedyShows')
      .then(response => response.json())
      .then(data => setComedyShows(data));

    fetch('http://localhost:3000/dramaShows')
      .then(response => response.json())
      .then(data => setDramaShows(data));

    fetch('http://localhost:3000/fantasyShows')
      .then(response => response.json())
      .then(data => setFantasyShows(data));
  }, []);

  return (
    <div className="tv-shows-page">
      <header>
        <Navbar />
      </header>

{/* Action shows section */}
      <div className="section action-shows">
        <h2>Action Shows</h2>
        <div className="card-container">
          {actionShows.map(show => (
            <div key={show.id} className="card">

            {/* Link to naviagte to signup page */}
              <Link to="/login">
                <img src={show.poster} alt={show.title} />
                <div className="show-details">
                  <h3>{show.title}</h3>
                  <p>{show.seasons}</p>
                  <p>{show.releaseDate}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

{/* Comedy shows section */}
      <div className="section comedy-shows">
        <h2>Comedy Shows</h2>
        <div className="card-container">
          {comedyShows.map(show => (
            <div key={show.id} className="card">
              <Link to="/login">
                <img src={show.poster} alt={show.title} />
                <div className="show-details">
                  <h3>{show.title}</h3>
                  <p>{show.seasons}</p>
                  <p>{show.releaseDate}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

{/* Drama shows section */}
      <div className="section drama-shows">
        <h2>Drama Shows</h2>
        <div className="card-container">
          {dramaShows.map(show => (
            <div key={show.id} className="card">
              <Link to="/login">
                <img src={show.poster} alt={show.title} />
                <div className="show-details">
                  <h3>{show.title}</h3>
                  <p>{show.seasons}</p>
                  <p>{show.releaseDate}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

{/* Fantasy shows section */}
      <div className="section fantasy-shows">
        <h2>Fantasy Shows</h2>
        <div className="card-container">
          {fantasyShows.map(show => (
            <div key={show.id} className="card">
              <Link to="/login">
                <img src={show.poster} alt={show.title} />
                <div className="show-details">
                  <h3>{show.title}</h3>
                  <p>{show.seasons}</p>
                  <p>{show.releaseDate}</p>
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

export default TVShowsPage;
