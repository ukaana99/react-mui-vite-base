import { createContext, useMemo, useState } from 'react';

import { createTheme } from '@mui/material/styles';

import themes from '@/theme';

const ThemeContext = createContext({
  mode: 'light',
  toggleMode: () => {},
});

const ThemeContextProvider = (props) => {
  const [mode, setMode] = useState('light');
  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const theme = useMemo(() => createTheme(themes[mode]), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
