import React from 'react';
import {Switch, Route, NavLink } from 'react-router-dom';
import Scale from './components/Scale';
import './App.css';
import { PITCH } from './utils/basics';
import Goals from './components/pages/Goals';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <nav role="navigation">
        <NavLink to="/goals">Goals</NavLink>
        <NavLink to="/">Scales</NavLink>
      </nav>
      <div id="App" role="main">
        <Switch>
          <Route exact path="/goals"><Goals /></Route>
          <Route exact path="/" render={() => {
            return (
              <section>
                <h3>Scales</h3>
                <Scale pitch={PITCH.A} />
                <Scale pitch={PITCH.B} />
                <Scale pitch={PITCH.C} />
                <Scale pitch={PITCH.D} />
                <Scale pitch={PITCH.E} />
                <Scale pitch={PITCH.F} />
                <Scale pitch={PITCH.G} />
              </section>
            );
          }}></Route>
        </Switch>
      </div>
      <footer role="contentinfo">

      </footer>
    </React.Fragment>
  );
};

export default App;
