import React, { useEffect } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import PageHeader from '../components/PageHeader';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: 74
  }
}));


const MyApp = (props) => {
  const { Component, pageProps } = props;
  const classes = useStyles();

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
        <CssBaseline />
        <PageHeader />
        <div className={ classes.mainContent }>
          <Component { ...pageProps } />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
