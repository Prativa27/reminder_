// Login.js
import React, { useState } from 'react';
import Home from './Home';
import {useNavigate} from 'react-router-dom'

function Login({ onLogin }) {
    const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    nav('/home')
    onLogin(username);
  };

  return (
    <div>
     
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
