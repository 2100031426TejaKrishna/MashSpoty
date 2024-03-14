// src/components/Subscribe.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import SubForm from './SubForm';
import LoginPage from './LoginPage';
import { Route, Switch } from 'react-router-dom';
import '../App.css';

const Subscribe = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const contentContainerStyles = {
    background: 'linear-gradient(to bottom, #000066, #0000)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
  };

  return (
    <div style={contentContainerStyles}>
      <div>
        <NavigationBar isExpanded={isExpanded} toggleNavbar={toggleNavbar} />

        <div className={`content-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <h1>Subscribe Here for more!</h1>

        <div className="heading">
          <h1> </h1>
          <Switch>
            <Route path="/subscribe" component={SubForm} />
            <Route path="/login" render={() => <LoginPage onLogin={handleLogin} />} />
          </Switch>
          
          <div className="login-section">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
