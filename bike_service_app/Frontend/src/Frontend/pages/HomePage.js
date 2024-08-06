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
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
    <header className="homepage-header">
      <h1>Welcome to Speedy Wheels Bike Service Station</h1>
      <p>Your one-stop solution for all bike servicing needs</p>
    </header>
    <div className="about-section">
      <p>
        <span className="about-highlight">Speedy Wheels Bike Service Station</span> is dedicated to providing top-notch
        service for all your bike needs. Our expert team ensures that your bike receives the best care, from routine
        maintenance to complex repairs. <span className="about-emphasis">We specialize in a range of services</span>, 
        including engine repairs, battery replacements, and tire changes. With our <span className="about-emphasis">state-of-the-art equipment</span> 
        and highly trained technicians, we guarantee efficient and reliable service. Our goal is to keep your bike running smoothly 
        and safely, no matter the make or model. At Speedy Wheels, we believe in <span className="about-highlight">customer satisfaction</span> 
        and strive to exceed your expectations with every visit. Whether you need a quick fix or a comprehensive overhaul, 
        trust us to deliver exceptional results. <span className="about-highlight">Your bike's performance</span> is our top priority, 
        and we are committed to providing <span className="about-emphasis">quality service</span> every time.
      </p>
    </div>
    {/* <main>
      <ServiceList />
    </main> */}
  </div>
);

export default HomePage;
