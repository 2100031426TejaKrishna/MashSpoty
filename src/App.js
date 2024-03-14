// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import movie from './components/movies';
import music from './components/music';
import newhot from './components/new';
import subscribe from './components/sub';
import login from './components/LoginPage';
import about from './components/about';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/movie" component={movie} />
        <Route path="/music" component={music} />
        <Route path="/new-hot" component={newhot} />
        <Route path="/subscribe" component={subscribe} />
        <Route path="/login" component={login} />
        <Route path="/about" component={about} />
      </Switch>
    </Router>
  );
};

export default App;
