import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://userdb-paradons-projects.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate('/dashboard');
      } else {
        const error = await response.text();
        alert(`Login failed: ${error}`);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/">
            <img className='logo' src="./assets/logo.png" alt="logo" />
        </Link>
        <h2>Login</h2>
        <p>Welcome back!</p>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default Login;
