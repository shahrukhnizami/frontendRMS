import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Layout from './layout/layout.jsx';
import users from './pages/users.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import AgentLayout from './layout/AgentLayout.jsx';
import About from './pages/about.jsx';
import AgentDashBoard from './AgentDashBoard.jsx';
import AgentDashboard from './AgentDashBoard.jsx';
import Properties from './pages/Properties.jsx';
import Tasks from './pages/Tasks.jsx';
import Register from './pages/Register.jsx';
import { AuthProvider } from './context/AuthContext';

// Create the router configuration
const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/admin',
        Component: Layout,
        children: [
          {
            path: '/admin',
            Component: Dashboard,
          },
          {
            path: 'users',
            Component: users,
          },
          {
            path: 'contact',
            Component: ContactUs,
          },
        ],
      },
      {
        path: '/agent',
        Component: AgentLayout,
        children: [
          {
            path: '/agent',
            Component: AgentDashboard,
          },
          {
            path: '/agent/properties',
            Component: Properties,
          },
          {
            path: '/agent/tasks',
            Component: Tasks,
          },
        ],
      },
    ],
  },
]);

// Create the root of your React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap AuthProvider around RouterProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
