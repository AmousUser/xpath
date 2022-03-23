// components
import Footer from '../footer';
import Header from '../header';
//////////////////////////////////////////////////

const Layout = ({ router, children }) => (
  <>
    <Header router={router} />
    <main>
      {children}
    </main>
    <Footer router={router} />
  </>
);

export default Layout;
