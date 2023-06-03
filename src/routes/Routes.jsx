import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/system';

import MainLayout from '@/layouts/MainLayout';
import Dashboard from '@/pages/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="*" />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Box />} />
        <Route path="*" />
      </Route>
      ,
    </Routes>
  );
}

export default AppRoutes;
