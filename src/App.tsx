import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="App">
      <h1>chops.io</h1>
      <h2>Technical Goals</h2>
      <ul>
        <li>Update eslint (trailing commas, EOF, etc.)</li>
        <li>Test react-axe</li>
        <li>Explore Vexel/lighthouse options</li>
      </ul>
      <h2>Product Goals</h2>
      <ul>
        <li>Define note</li>
        <li>Define chord</li>
        <li>Define key</li>
        <li>Minor scale calculator</li>
        <li>Major scale calculator</li>
        <li>Major/minor triad calculator</li>
        <li>Represent scale as 3D objects</li>
        <li>Represent tones via JS</li>
        <li>Add 3D environment</li>
      </ul>
      <h2>Ideas</h2>
      <ul>
        <li>Download phone number ringtone (or any tones)</li>
        <li>Volumes/colors based on note Hz</li>
      </ul>
    </div>
  );
};

export default App;
