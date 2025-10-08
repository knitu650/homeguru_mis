import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '@components/shared/ProtectedRoute';
import MainLayout from '@components/layout/MainLayout';
import AuthLayout from '@components/layout/AuthLayout';

// Auth Pages
import LoginPage from '@features/auth/pages/LoginPage';

// Dashboard Pages
import AdminDashboard from '@features/dashboard/pages/AdminDashboard';

// Placeholder pages
const StudentsPage = () => <div>Students Page</div>;
const TeachersPage = () => <div>Teachers Page</div>;
const AttendancePage = () => <div>Attendance Page</div>;
const ClassesPage = () => <div>Classes Page</div>;
const AssignmentsPage = () => <div>Assignments Page</div>;
const ExaminationsPage = () => <div>Examinations Page</div>;
const TimetablePage = () => <div>Timetable Page</div>;
const FeesPage = () => <div>Fees Page</div>;
const TransportPage = () => <div>Transport Page</div>;
const SettingsPage = () => <div>Settings Page</div>;

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Navigate to="/dashboard" replace />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <AdminDashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <MainLayout>
              <StudentsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/teachers"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TeachersPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <MainLayout>
              <AttendancePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/classes"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ClassesPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/assignments"
        element={
          <ProtectedRoute>
            <MainLayout>
              <AssignmentsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/examinations"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ExaminationsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/timetable"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TimetablePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/fees"
        element={
          <ProtectedRoute>
            <MainLayout>
              <FeesPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/transport"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TransportPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <MainLayout>
              <SettingsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* 404 Page */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
