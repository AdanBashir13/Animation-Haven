import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MoviesPage from '../pages/MoviesPage';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MoviesPage />
      <Footer />
    </div>
  );
};

export default App;
