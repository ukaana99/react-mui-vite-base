import { Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Dashboard from '@/pages/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="jha" element={null} />
        <Route path="*" element={null} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
