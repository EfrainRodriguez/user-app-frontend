import { ReactNode } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

interface ThemeConfigProps {
  children: ReactNode;
}

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#A294FD',
        main: '#614EFA',
        dark: '#3327B3'
      },
      secondary: {
        light: '#FEB19A',
        main: '#FE6257',
        dark: '#B62B39'
      }
    },
    typography: {
      fontFamily: 'Lexend, sans-serif'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
