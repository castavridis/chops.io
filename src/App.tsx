import React from 'react';
import {Switch, Route, NavLink } from 'react-router-dom';
import { PITCH } from './utils/basics';
import GoalsPage from './components/pages/Goals';
import Scale from './components/Scale';
import './App.css';
import ScalesPage from './components/pages/Scales';

const App: React.FC = () => {
  return (
    <div id="App">
      <nav role="navigation">
        <NavLink to="/goals">Goals</NavLink>
        <NavLink to="/">Scales</NavLink>
      </nav>
      <div role="main">
        <h1>chops.io</h1>
        <Switch>
          <Route path="/goals">
            <GoalsPage />
          </Route>
          <Route exact path="/">
            <ScalesPage />
          </Route>
        </Switch>
      </div>
      <footer role="contentinfo">
      </footer>
    </div>
  );
};

export default App;
