/* eslint-disable react-refresh/only-export-components */
import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useEffect, useState } from 'react';

export const ColorModeContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('dark');

  const theme = createTheme({ palette: { mode } });

  useEffect(() => {
    const modeFromLocalStorage = localStorage.getItem('theme');
    if (modeFromLocalStorage) {
      setMode(modeFromLocalStorage);
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}