import { Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
