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
          {/* eslint-disable-next-line */}
          <meta name='keywords' content='Dispatch, Dispatch companies, Dispatch service, Virtual Dispatch, Owner Operators, Top Dispatch Companies, Logistics, Trucks, Fleet, OPS, Trucking Company, Trucking companies, Highest Paying Loads, Find Loads, Hot Shoots, Semi-Truck Insurance, CDL Jobs, Truck Driver Jobs, Truck Driver, Truck Miles, ELD, Electronic Log Books, Truck Parts, Truck Stop, Truck Parking Lots, Truck Mechanics, Truck Repair shop' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <link rel='shortcut icon' href='/favicons/favicon.ico' type='image/x-icon' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
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
