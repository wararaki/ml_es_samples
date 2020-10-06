import React, { useEffect } from 'react';
import { ThemeProvider as MaterialUIThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import '../styles/globals.css';
import '../styles/App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8BC34A'
    }
  }
});


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return(
    <MaterialUIThemeProvider theme={ theme }>
      <StyledComponentsThemeProvider theme={ theme }>
        <Component { ...pageProps } />
      </StyledComponentsThemeProvider>
    </MaterialUIThemeProvider>
  );
};

export default MyApp;
