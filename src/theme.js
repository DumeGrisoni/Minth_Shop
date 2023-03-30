import { createTheme } from '@mui/material/styles';
export const shades = {
  primary: {
    100: '#cccccc',
    200: '#999999',
    300: '#666666',
    400: '#333333',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
  },
  neutral: {
    100: '#f5f5f5',
    200: '#ecebeb',
    300: '#e2e1e1',
    400: '#d9d7d7',
    500: '#cfcdcd',
    600: '#a6a4a4',
    700: '#7c7b7b',
    800: '#535252',
    900: '#292929',
  },

  secondary: {
    100: '#e3e9f0',
    200: '#c7d4e1',
    300: '#abbed1',
    400: '#8fa9c2',
    500: '#7393b3',
    600: '#5c768f',
    700: '#45586b',
    800: '#2e3b48',
    900: '#171d24',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      main: shades.neutral[500],
      dark: shades.neutral[700],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ['Fauna One', 'sans-serif'].join(','),
    fontSize: 11,
    h1: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 48,
    },
    h2: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 36,
    },
    h3: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h4: {
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
});
