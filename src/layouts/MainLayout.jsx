import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from './AppBar';
import Breadcrumbs from './Breadcrumbs';
import Drawer from './Drawer';
import { DrawerHeader } from './styled';

function MainLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <Box color="primary" component="main" sx={{ flexGrow: 1, px: 4, py: 3 }}>
        <DrawerHeader />
        <Breadcrumbs />
        <Outlet />
      </Box>
    </Box>
  );
}
export default MainLayout;
