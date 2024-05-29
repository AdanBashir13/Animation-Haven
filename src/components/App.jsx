// src/App.jsx
import React from 'react';
import Navbar from './Navbar';


function App() {
  console.log("App component loaded"); // Add this line
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
