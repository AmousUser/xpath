import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
// components
import Layout from '../components/layout';
// ui
import "../styles/font.css";
import Theme from '../theme';
import GlobalStyles from '../ui/global-styles';
////////////////////////////////////////////////////

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [modalOpened, setModalOpened] = useState(false);

  const handleCloseModal = () => {
    setModalOpened(false);
    document.getElementsByTagName('body')[0].style.overflow = 'initial';
  };

  const handleOpenModal = () => {
    setModalOpened(true);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  };

  return (
    <>
      <Head>
        <title>Xpath</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Layout
          router={router}
          modalOpened={modalOpened}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        >
          <Component
            {...pageProps}
            router={router}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
