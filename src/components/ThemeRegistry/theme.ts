'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d3280', // Deep Blue
      light: '#4c5cba',
      dark: '#000e4d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c5a059', // Gold/Bronze accent
      light: '#f8d187',
      dark: '#93722e',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#0d3280',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#0d3280',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;
