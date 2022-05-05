// components
import Portal from '../portal';
import Footer from '../footer';
import Header from '../header';
// forms
import ApplyNowFormComponent from '../../forms/apply-now';
// ui
import { ModalWrapper } from '../../ui';
//////////////////////////////////////////////////

const Layout = ({ router, children, modalOpened, handleOpenModal }) => (
  <>
    <Header router={router} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />
    <main>
      {children}
    </main>
    <Footer router={router} handleOpenModal={handleOpenModal} />
    {
      modalOpened && (
        <Portal selector='#modal'>
          <ModalWrapper background='rgba(0, 0, 0, 0.8)'>
            <ApplyNowFormComponent handleCloseModal={handleCloseModal} />
          </ModalWrapper>
        </Portal>
      )
    }
  </>
);

export default Layout;
