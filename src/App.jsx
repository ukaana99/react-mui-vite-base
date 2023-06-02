import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import MiniDrawer from '@/layouts/MiniDrawer';
import router from '@/routes';

import { ThemeContext, ThemeContextProvider } from './store/theme-context';

function EptwApp() {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themeContext.theme}>
      <CssBaseline />
      {/* <RouterProvider router={Router} /> */}
      <MiniDrawer />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <EptwApp />
    </ThemeContextProvider>
  );
}

export default App;
