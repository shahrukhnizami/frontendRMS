import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Layout from './layout/layout.jsx';
import Users from './pages/Users.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import AgentLayout from './layout/AgentLayout.jsx';
import Properties from './pages/Properties.jsx';
import Tasks from './pages/Tasks.jsx';
import Register from './pages/Register.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css';
import { AgentDashboard } from './AgentDashBoard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      {
        path: '/admin',
        element: <Layout />,
        children: [
          { path: '/admin', element: <Dashboard /> },
          { path: 'users', element: <Users /> },
          { path: 'contact', element: <ContactUs /> },
        ],
      },
      {
        path: '/agent',
        element: <AgentLayout />,
        children: [
          { path: '/agent', element: <AgentDashboard /> },
          { path: '/agent/properties', element: <Properties /> },
          { path: '/agent/tasks', element: <Tasks /> },
        ],
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>)