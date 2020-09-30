import React from 'react';
import NextDocument from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';

export default class Document extends NextDocument {
  static async getInitialProps (ctx) {
    const styledComponentSheets = new StyledComponentSheets();
    const materialCUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => styledComponentSheets.collectStyles(materialCUiSheets.collect(<App { ...props } />))
      });
      
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            { initialProps.styles }
            { materialCUiSheets.getStyleElement() }
            { styledComponentSheets.getStyleElement() }
          </React.Fragment>
        ]
      };
    } finally {
        styledComponentSheets.seal();
    }
  }
}