// src/components/LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/cssfiles/login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <Link to="/subscribe"> <button type="submit">Login</button></Link>
      </form>
      
    </div>
  );
};

export default LoginPage;
