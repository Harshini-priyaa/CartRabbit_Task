import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './Frontend/pages/HomePage';
import LoginPage from './Frontend/pages/LoginPage';
import RegisterPage from './Frontend/pages/RegisterPage';
import DashboardPage from './Frontend/pages/DashboardPage';
import ServicesPage from './Frontend/pages/ServicesPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
