import NextApp from 'next/app';
import React, { useEffect } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import '../styles/globals.css';
import '../styles/App.css';

const theme = {
  primary: 'green'
};


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return(
    <StyledComponentsThemeProvider theme={ theme }>
      <Component { ...pageProps } />
    </StyledComponentsThemeProvider>
  );
};

export default MyApp
