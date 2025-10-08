import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AdminDashboard from '../features/dashboard/pages/AdminDashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><AdminDashboard /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
