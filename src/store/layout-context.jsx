import { createContext, useState } from 'react';
import { useEffect } from 'react';

import { createTheme } from '@mui/material/styles';

import themes from '@/theme';

let globalMode = localStorage.getItem('theme-mode');

const LayoutContext = createContext({
  mode: globalMode,
  theme: themes[globalMode],
  isDrawerOpen: false,
  toggleMode: () => {},
  openDrawer: () => {},
  closeDrawer: () => {},
});

const LayoutContextProvider = (props) => {
  const [mode, setMode] = useState(globalMode);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const theme = createTheme(themes[mode]);
  return (
    <LayoutContext.Provider
      value={{ mode, theme, isDrawerOpen, toggleMode, openDrawer, closeDrawer }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutContextProvider };
