import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axe from 'react-axe';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
  ,
  document.getElementById('root')
);
