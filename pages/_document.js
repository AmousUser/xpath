import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
////////////////////////////////////////////////////

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
          />
        </Head>
        <body>
          <Main />
          <div id='modal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
