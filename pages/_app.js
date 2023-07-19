import React from 'react';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  // Custom app-wide logic goes here

  return <Component {...pageProps} />;
}

export default MyApp;
