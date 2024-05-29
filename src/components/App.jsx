import React from 'react';
import Navbar from './Navbar';
import TrendingSection from './TrendingSection';


const App = () => {
  return (
    console.log("App component loaded"); // Add this line
    <div className="App">
      <Navbar />
      <TrendingSection />
    </div>
  );
};

export default App;
