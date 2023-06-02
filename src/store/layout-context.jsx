import { createContext, useMemo, useState } from 'react';

import { createTheme } from '@mui/material/styles';

import themes from '@/theme';

const LayoutContext = createContext({
  mode: 'light',
  isDrawerOpen: false,
  toggleMode: () => {},
  openDrawer: () => {},
  closeDrawer: () => {},
});

const LayoutContextProvider = (props) => {
  const [mode, setMode] = useState('light');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const theme = useMemo(() => createTheme(themes[mode]), [mode]);

  return (
    <LayoutContext.Provider
      value={{ mode, theme, isDrawerOpen, toggleMode, openDrawer, closeDrawer }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutContextProvider };
