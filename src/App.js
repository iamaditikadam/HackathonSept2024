// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import AssignmentWidget from './Components/AssignmentWidget.tsx';
import './index.css'; // Use index.css for styling

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Other content can go here */}
      <div className="flex-grow"></div>
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-white shadow-lg z-10">
        <AssignmentWidget />
      </div>
      <nav className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 shadow-lg z-20">
        <h2 className="text-white text-center">Navigation Bar</h2>
      </nav>
    </div>
  );
};

export default App;