import { AppProvider } from '@toolpad/core/react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import TaskIcon from '@mui/icons-material/Task';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import { Outlet, Link, useLocation } from 'react-router-dom';
import { Avatar } from '@mui/material';

// Navigation for Admin
const ADMIN_NAVIGATION = [
  {
    kind: 'header',
    title: 'Admin Panel',
  },
  {
    segment: 'admin',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'admin/users',
    title: 'Users',
    icon: <PeopleIcon />,
  },
  {
    segment: 'admin/tenant',
    title: 'Agent',
    icon: <ContactEmergencyIcon />,
  },
  {
    segment: 'admin/income',
    title: 'Income',
    icon: <CurrencyExchangeIcon />,
  },
  {
    segment: 'admin/maintanance',
    title: 'Maintainance',
    icon: <TaskIcon />,
  },
  {
    segment: 'admin/agrrement',
    title: 'Agrrement',
    icon: <ThumbUpAltIcon />,
  },
];

// Navigation for Agent
const AGENT_NAVIGATION = [
  {
    kind: 'header',
    title: 'Agent Panel',
  },
  {
    segment: 'agent',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'agent/properties',
    title: 'Properties',
    icon: <HomeWorkIcon />,
  },

  
  {
    segment: 'agent/tasks',
    title: 'Tasks',
    icon: <AssignmentIcon />,
  },
];

function App() {
  const location = useLocation();

  // Determine the role based on the route
  const isAgent = location.pathname.startsWith('/agent');
  const navigation = isAgent ? AGENT_NAVIGATION : ADMIN_NAVIGATION;

  return (
    <AppProvider
      navigation={navigation}
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
