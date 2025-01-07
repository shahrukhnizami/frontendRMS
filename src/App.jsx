import { AppProvider } from '@toolpad/core/react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import PeopleIcon from '@mui/icons-material/People';

import { Outlet  } from 'react-router-dom'




const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'contact',
    title: 'Contact',
    icon: <ContactsIcon />,
  },
  {
    segment: 'users',
    title: 'users',
    icon: <PeopleIcon />,
  },
 
];


function App() {

  return (
    <>
    
    <AppProvider
      // session={session}
      // authentication={authentication}
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://codingmstr.com/img/logo-white.png" alt="MUI logo" />,
        title: 'Rental Management System',
      }}
    >
      <Outlet />
    </AppProvider>
     
    </>
  )
}

export default App
