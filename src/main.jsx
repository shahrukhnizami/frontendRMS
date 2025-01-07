import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import ContactUs from './pages/ContactUs.jsx';
import Home from './pages/Home.jsx';
import Layout from './layout/layout.jsx';
import users from './pages/users.jsx';
import Dashboard from './pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '/',
            Component: Dashboard,
          },
          {
            path: '/contact',
            Component: ContactUs,
          },
        
          {
            path: '/users',
            Component: users,
          },
        ],
      },
    ],
  },])

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
