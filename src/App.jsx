import React, { useState, useMemo } from 'react';
import { AppProvider } from '@toolpad/core/react-router-dom';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ContactEmergency as ContactEmergencyIcon,
  CurrencyExchange as CurrencyExchangeIcon,
  Task as TaskIcon,
  ThumbUpAlt as ThumbUpAltIcon,
  Assignment as AssignmentIcon,
  HomeWork as HomeWorkIcon,
} from '@mui/icons-material';
import { useAuth } from './context/AuthContext'; // Access AuthContext for user & auth functions

const ADMIN_NAVIGATION = [
  { kind: 'header', title: 'Admin Panel', key: 'admin-header' },
  { segment: 'admin', title: 'Dashboard', icon: <DashboardIcon />, key: 'admin-dashboard' },
  { segment: 'admin/users', title: 'Users', icon: <PeopleIcon />, key: 'admin-users' },
  { segment: 'admin/tenant', title: 'Agent', icon: <ContactEmergencyIcon />, key: 'admin-agent' },
  { segment: 'admin/income', title: 'Income', icon: <CurrencyExchangeIcon />, key: 'admin-income' },
  { segment: 'admin/maintanance', title: 'Maintenance', icon: <TaskIcon />, key: 'admin-maintenance' },
  { segment: 'admin/agrrement', title: 'Agreement', icon: <ThumbUpAltIcon />, key: 'admin-agreement' },
];

const AGENT_NAVIGATION = [
  { kind: 'header', title: 'Agent Panel', key: 'agent-header' },
  { segment: 'agent', title: 'Dashboard', icon: <DashboardIcon />, key: 'agent-dashboard' },
  { segment: 'agent/properties', title: 'Properties', icon: <HomeWorkIcon />, key: 'agent-properties' },
  { segment: 'agent/tasks', title: 'Tasks', icon: <AssignmentIcon />, key: 'agent-tasks' },
];

const USER_NAVIGATION = [
  { kind: 'header', title: 'User Panel', key: 'user-header' },
  { segment: 'user', title: 'Dashboard', icon: <DashboardIcon />, key: 'user-dashboard' },
  { segment: 'user/properties', title: 'Properties', icon: <HomeWorkIcon />, key: 'user-properties' },
  { segment: 'user/tasks', title: 'Tasks', icon: <AssignmentIcon />, key: 'user-tasks' },
];

function App() {
  const location = useLocation();
  const { user, login, logout } = useAuth(); // Access user and auth functions
  const navigate = useNavigate();

  const [session, setSession] = useState(null);

  const isAgent = location.pathname.startsWith('/agent');
  const isUser = location.pathname.startsWith('/user');
  const isAdmin = location.pathname.startsWith('/admin');

  const navigation = isAgent
    ? AGENT_NAVIGATION
    : isUser
    ? USER_NAVIGATION
    : isAdmin
    ? ADMIN_NAVIGATION
    : [];

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        if (user) {
          setSession({
            user: {
              name: user.name,
              email: user.email,
              image: user.image || 'https://via.placeholder.com/40', // Default placeholder if no image
            },
          });
        } else {
          console.warn('User data is missing. Ensure login is working correctly.');
        }
      },
      signOut: () => {
        logout(); // Call the logout function from AuthContext
        setSession(null); // Clear session state
        navigate('/'); // Redirect to the homepage
      },
    };
  }, [user, logout, navigate]);

  return (
    <AppProvider
      session={session}
      navigation={navigation}
      authentication={authentication}
      branding={{
        logo: (
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkmOfnH5s5nqfhX1FQhV5J-yv4iAtWcVf1mLpWFDujTzg48yHEiCOiAdr5YQ7BwIx69w&usqp=CAU"
              alt="Rental Management Logo"
              style={{ height: '40px', verticalAlign: 'middle' }}
            />
          </Link>
        ),
        title: (
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            {isAgent
              ? 'Agent Management System'
              : isAdmin
              ? 'Admin Panel'
              : 'Rental Management System'}
          </Link>
        ),
      }}
    >
      <Outlet />
    </AppProvider>
  );
}

export default App;
