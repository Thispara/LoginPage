import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Import the CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://userdb-paradons-projects.vercel.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.text();
        alert(result);
        window.location.href = '/login';
      } else {
        const error = await response.text();
        alert(`Error: ${error}`);
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
        <h2>Register</h2>
        <p>Welcome to Our Service</p>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
