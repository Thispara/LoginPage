import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/">
          <img className="logo" src="/assets/logo.png" alt="Logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Buy Crypto</Link></li>
          <li><Link to="/">Services</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
      </div>
      <div className="auth-buttons">
        <Link to="/login"><button className="login-btn">Login</button></Link>
        <Link to="/register"><button className="register-btn">Register</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
