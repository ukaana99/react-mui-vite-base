import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MiniDrawer from '@/layouts/MiniDrawer';

function Router() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* <Route path="/" element={<MiniDrawer />}> */}
        <Route index element={<MiniDrawer />} />
        <Route path="*" />
      </Route>,
    ),
  );
}

export default Router;
