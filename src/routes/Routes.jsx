import { Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Dashboard from '@/pages/Dashboard';
import Empty from '@/pages/Empty';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Empty />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
