import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './Frontend/pages/HomePage';
import LoginPage from './Frontend/pages/LoginPage';
import RegisterPage from './Frontend/pages/RegisterPage';
import DashboardPage from './Frontend/pages/DashboardPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
