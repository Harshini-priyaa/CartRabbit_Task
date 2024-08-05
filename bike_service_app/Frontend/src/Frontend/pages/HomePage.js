import React from 'react';
import { Link } from 'react-router-dom';
import ServiceList from '../components/ServiceList';
import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    <nav className="navbar">
      <div className="navbar-brand">Bike Service Station</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
    <header className="homepage-header">
      <h1>Welcome to Speedy Wheels Bike Service Station</h1>
      <p>Your one-stop solution for all bike servicing needs</p>
    </header>
    <main>
      <ServiceList />
    </main>
  </div>
);

export default HomePage;
