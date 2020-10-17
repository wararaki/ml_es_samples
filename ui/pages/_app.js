import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../src/theme';


const MyApp = (props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return(
    <React.Fragment>
      <Head>
        <title>my page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={ theme }>
        <Component { ...pageProps } />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
