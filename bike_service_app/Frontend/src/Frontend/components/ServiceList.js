import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchServices();
  }, []);

  if (error) {
    return <div>Error fetching services: {error.message}</div>;
  }

  return (
    <div className="service-list">
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`/${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
