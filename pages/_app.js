import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
// components
import Layout from '../components/layout';
// ui
import Theme from '../theme';
import GlobalStyles from '../ui/global-styles';
////////////////////////////////////////////////////

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Xpath</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Layout router={router}>
          <Component {...pageProps} router={router} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
