
// src/App.js
import React from 'react';
import NavBar from './Components/navBar.tsx'; // Import the NavBar component
import './index.css'; // Use index.css for styling

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div> {/* This allows the header/content area to grow */}
      <NavBar /> {/* Display the NavBar at the bottom */}
    </div>
  );
};

export default App;
