import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './Frontend/pages/HomePage';
import LoginPage from './Frontend/pages/LoginPage';
import RegisterPage from './Frontend/pages/RegisterPage';
import DashboardPage from './Frontend/pages/DashboardPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Routes>
  </BrowserRouter>
);

export default App;
