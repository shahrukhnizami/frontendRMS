import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Login from '../pages/Login';

export default function Layout() {
  return (
   
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>

  );
}