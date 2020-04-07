import React from 'react';
import './App.css';
import logo from './imgs/spacex.jpeg';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="spacex" style={{width: 300, display: 'block', margin: 'auto'}} />
    </div>
  );
}

export default App;
