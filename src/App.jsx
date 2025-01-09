import { AppProvider } from '@toolpad/core/react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import PeopleIcon from '@mui/icons-material/People';

import { Outlet, Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
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
    segment: 'admin/contact',
    title: 'Contact',
    icon: <ContactsIcon />,
  },
 
];

function App() {
  return (
    <>
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: (
            <Link herf="/admin">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkmOfnH5s5nqfhX1FQhV5J-yv4iAtWcVf1mLpWFDujTzg48yHEiCOiAdr5YQ7BwIx69w&usqp=CAU"
                alt="MUI logo"
                style={{ height: '40px', verticalAlign: 'middle' }}
              />
            </Link>
          ),
          title: (
            <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
              Rental Management System
            </Link>
          ),
          segment: 'admin',
          
        }
        
      }
      >
        <Outlet />
      </AppProvider>
    </>
  );
}

export default App;
