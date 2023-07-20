import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  // Custom app-wide logic goes here

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>;
}

export default MyApp;
