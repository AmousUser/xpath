import Link from 'next/link';
// icons
import Icon from '../../icons';
// ui
import { Box, FlexBox } from '../../ui';
// footer
import { StyledFooter } from './ui';
import LinksColumn from './links-column';
//////////////////////////////////////////////////

const companyColumn = {
  title: 'Company',
  links: [
    {
      linkTo: '/',
      name: 'Home',
      routerLink: true,
    },
    {
      name: 'FAQ',
      linkTo: '/faq',
      routerLink: true,
    },
    {
      externalLink: true,
      name: 'Portal Login',
      linkTo: 'https://xpath.amoustms.com/login',
    },
    {
      modal: true,
      name: 'Apply Now',
    },
  ],
};

const socialColumn = {
  title: 'Social',
  links: [
    {
      name: 'Facebook',
      linkTo: 'https://www.facebook.com/Xpath-Logistics-110078241666641',
    },
    {
      name: 'Instagram',
      linkTo: 'https://www.instagram.com/xpathlogistics/',
    },
    {
      name: 'Linkedin',
      linkTo: 'https://www.linkedin.com/company/xpath-logistics/',
    },
  ],
};

const contactsColumn = {
  title: 'Contacts',
  links: [
    {
      width: 180,
      textDecoration: 'none',
      name: `${'9858 Clint Moore Rd. Boca Raton, FL 33496'}`,
    },
    {
      ml: 10,
      icon: 'phoneIcon',
      name: '(904) 604-8904',
      textDecoration: 'underline',
      linkTo: 'tel: +19046048904',
    },
    {
      ml: 10,
      icon: 'mailIcon',
      textDecoration: 'underline',
      name: 'apply@xpathlogistics.com',
      linkTo: 'mailto:apply@xpathlogistics.com',
    },
  ],
};

const Footer = ({ router, handleOpenModal }) => {
  const activeNavItem = (navItem) => navItem === router.asPath;

  return (
    <StyledFooter
      width='100vw'
      bg='lightGrey'
      px={{ xs: 20, sm: 20, lg: 40, xl: 0 }}
      py={{ xs: 20, sm: 50, lg: 64, xl: 80 }}
    >
      <FlexBox
        mx='auto'
        maxWidth={1200}
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <FlexBox
          py={20}
          width={{ xs: '100%', md: '40%' }}
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
        >
          <Link href='/' passHref>
            <Box>
              <Icon
                h='100%'
                w='100%'
                width='200px'
                height='50px'
                iconName='xpathLogo'
              />
            </Box>
          </Link>
        </FlexBox>
        <FlexBox
          py={20}
          flexWrap='wrap'
          width={{ xs: '100%', md: '60%' }}
          justifyContent={{ xs: 'space-between', sm: 'space-around' }}
        >
          <LinksColumn
            links={companyColumn.links}
            title={companyColumn.title}
            activeNavItem={activeNavItem}
            handleOpenModal={handleOpenModal}
          />
          <LinksColumn links={socialColumn.links} title={socialColumn.title} />
          <LinksColumn
            links={contactsColumn.links}
            title={contactsColumn.title}
          />
        </FlexBox>
      </FlexBox>
    </StyledFooter>
  );
};

export default Footer;
