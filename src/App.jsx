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
import { useAuth } from './context/AuthContext'; // Correctly access the user object from AuthContext

// Navigation for Admin
const ADMIN_NAVIGATION = [
  { kind: 'header', title: 'Admin Panel', key: 'admin-header' },
  { segment: 'admin', title: 'Dashboard', icon: <DashboardIcon />, key: 'admin-dashboard' },
  { segment: 'admin/users', title: 'Users', icon: <PeopleIcon />, key: 'admin-users' },
  { segment: 'admin/tenant', title: 'Agent', icon: <ContactEmergencyIcon />, key: 'admin-agent' },
  { segment: 'admin/income', title: 'Income', icon: <CurrencyExchangeIcon />, key: 'admin-income' },
  { segment: 'admin/maintanance', title: 'Maintenance', icon: <TaskIcon />, key: 'admin-maintenance' },
  { segment: 'admin/agrrement', title: 'Agreement', icon: <ThumbUpAltIcon />, key: 'admin-agreement' },
];

// Navigation for Agent
const AGENT_NAVIGATION = [
  { kind: 'header', title: 'Agent Panel', key: 'agent-header' },
  { segment: 'agent', title: 'Dashboard', icon: <DashboardIcon />, key: 'agent-dashboard' },
  { segment: 'agent/properties', title: 'Properties', icon: <HomeWorkIcon />, key: 'agent-properties' },
  { segment: 'agent/tasks', title: 'Tasks', icon: <AssignmentIcon />, key: 'agent-tasks' },
];

function App() {
  const location = useLocation();
  const { user, login, logout } = useAuth(); // Correctly access the user object and auth functions from AuthContext
  
  const navigate = useNavigate();

  const isAgent = location.pathname.startsWith('/agent');
  const navigation = isAgent ? AGENT_NAVIGATION : ADMIN_NAVIGATION;
  const [session, setSession] = useState({});

  
 function DashboardLayoutAccount(props) {
  const { window } = props;

  const [session, setSession] = useState({
    user
  });}

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        // You can pass real user data here, for now, it's just a mock login
        login({
          name: user.name,
          email: user.email,
          // token: 'your-jwt-token', // Use a real token here
        });
        setSession({
          user
        });
      },
      signOut: () => {
        logout(user); // Call logout without the user data
        setSession(null);
        navigate("/"); // Redirect to homepage or login page
      },
    };
  }, [login, logout, navigate]);
  // const router = useDemoRouter('/');

  return (
    <AppProvider
      session={session}
      navigation={navigation}
      authentication={authentication}
      // router={router}
      branding={{
        logo: (
          <Link to={isAgent ? '/agent' : '/admin'}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkmOfnH5s5nqfhX1FQhV5J-yv4iAtWcVf1mLpWFDujTzg48yHEiCOiAdr5YQ7BwIx69w&usqp=CAU"
              alt="Rental Management Logo"
              style={{ height: '40px', verticalAlign: 'middle' }}
            />
          </Link>
        ),
        title: (
          <Link to={isAgent ? '/agent' : '/admin'} style={{ textDecoration: 'none', color: 'inherit' }}>
            {isAgent ? 'Agent Management System' : 'Rental Management System'}
          </Link>
        ),
        segment: isAgent ? 'agent' : 'admin',
      }}
    >
      <Outlet />
    </AppProvider>
  );
}

export default App;
