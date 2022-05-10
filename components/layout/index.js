// components
import Portal from '../portal';
import Footer from '../footer';
import Header from '../header';
// forms
import ApplyNowForm from '../../forms/apply-now';
// ui
import { ModalWrapper } from '../../ui';
//////////////////////////////////////////////////

const Layout = ({ router, children, modalOpened, handleOpenModal, handleCloseModal }) => (
  <>
    <Header router={router} handleOpenModal={handleOpenModal} />
    <main>
      {children}
    </main>
    <Footer router={router} handleOpenModal={handleOpenModal} />
    {
      modalOpened && (
        <Portal selector='#modal'>
          <ModalWrapper background='rgba(0, 0, 0, 0.8)'>
            <ApplyNowForm handleCloseModal={handleCloseModal} />
          </ModalWrapper>
        </Portal>
      )
    }
  </>
);

export default Layout;
