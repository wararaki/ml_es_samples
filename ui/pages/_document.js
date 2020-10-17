import React from 'react';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};


MyDocument.getInitialProps = async (ctx) => {
  const styledComponentSheets = new StyledComponentSheets();
  const materialUiSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  
  try {
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => styledComponentSheets.collectStyles(materialUiSheets.collect(<App { ...props } />))
    });
    
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialUiSheets.getStyleElement(),
        styledComponentSheets.getStyleElement()
      ]
    };
  } finally {
      styledComponentSheets.seal();
  }
};
