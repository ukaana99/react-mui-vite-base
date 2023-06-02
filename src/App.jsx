import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import MainLayout from '@/layouts/MainLayout';
import router from '@/routes';

import { LayoutContext } from './store/layout-context';

function App() {
  const layoutContext = useContext(LayoutContext);

  return (
    <ThemeProvider theme={layoutContext.theme}>
      <CssBaseline />
      {/* <RouterProvider router={Router} /> */}
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
