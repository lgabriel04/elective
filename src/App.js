// App.js
import customLogo from './logo_2.png';

import React from 'react';
import './App.css';
import CameraApp from './CameraApp'; // Import the CameraApp component

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={customLogo} className="App-logo" alt="Custom Logo" />
      <h1 style={{
  background: `linear-gradient(to right, #0074D9, #7FDBFF)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}>Note saver!</h1>
      <p style={{
  background: `linear-gradient(to right, #0074D9, #7FDBFF)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}>Wealth creation sample</p>
        <CameraApp /> {/* Render the CameraApp component */}
      </header>
    </div>
  );
}

export default App;
