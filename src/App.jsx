import { useContext } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Routes from '@/routes';

import { LayoutContext } from './store/layout-context';

function App() {
  const layoutContext = useContext(LayoutContext);

  console.log(location);
  return (
    <ThemeProvider theme={layoutContext.theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
