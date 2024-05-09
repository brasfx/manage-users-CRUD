import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#ff1744',
    },
    success: {
      main: '#2ecc70',
    },
    info: {
      main: '#3398db',
    },
  },
  typography: {
    fontFamily: ['Roboto'].join(','),
    h1: {
      fontSize: '20px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '18px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
    },
  },
});

export default theme;
