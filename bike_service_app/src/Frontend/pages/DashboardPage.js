import React from 'react';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';

const DashboardPage = () => (
  <div>
    <h1>Dashboard</h1>
    <BookingForm />
    <BookingList />
  </div>
);

export default DashboardPage;
