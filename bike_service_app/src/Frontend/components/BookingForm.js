import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await axios.get('/api/services');
      setServices(data);
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('userInfo'));
    await axios.post('/api/bookings', {
      user: user._id,
      service: selectedService,
      date,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Service:
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          {services.map((service) => (
            <option key={service._id} value={service._id}>{service.name}</option>
          ))}
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit">Book Service</button>
    </form>
  );
};

export default BookingForm;
