// src/App.js
import React from 'react';
import NavBar from './Components/navBar.tsx'; // Import the NavBar component
import Prompt from './Components/prompt.tsx'; // Ensure Prompt is imported with an uppercase 'P'
import './index.css'; // Use index.css for styling

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center"> {/* Center the Prompt component */}
        <Prompt /> {/* Display the Prompt component in the center */}
      </div>
      <NavBar /> {/* Display the NavBar at the bottom */}
    </div>
  );
};

export default App;
