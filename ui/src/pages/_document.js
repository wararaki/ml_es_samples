import React from 'react';
import { ServerStyleSheets } from '@material-ui/styles';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import theme from '../theme';


export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={ theme.palette.primary.main } />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};


MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  
  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App { ...props } />)
  });

  const initialProps = await NextDocument.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};
