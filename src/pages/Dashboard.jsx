import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Notifications</li>
            <li>Activity Log</li>
          </ul>
        </div>

        <div className="dashboard-main">
          <section className="overview">
            <h2>Welcome, User!</h2>
            <p>Manage your profile, settings, and track your recent activities.</p>
          </section>

          <section className="account-balance">
            <h3>Account Balance</h3>
            <div className="balance-card">
              <h4>$5,450.00</h4>
              <p>Available Balance</p>
            </div>
          </section>

          <section className="recent-activities">
            <h3>Recent Activities</h3>
            <ul>
              <li>Logged in from a new device - 2 hours ago</li>
              <li>Changed password - 1 day ago</li>
              <li>Updated profile picture - 3 days ago</li>
            </ul>
          </section>

          <section className="profile-summary">
            <h3>Profile Summary</h3>
            <p>Email: user@example.com</p>
            <p>Member since: January 2023</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
