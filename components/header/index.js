import Link from 'next/link';
import { useState, useEffect } from 'react';
// components
import MenuIcon from '../menu-icon';
// hooks
import { useWindowSize } from '../../hooks/use-window-size';
// icons
import Icon from '../../icons';
// ui
import { Button, FlexBox, StyledLink, FixedFlexBox } from '../../ui';
// ui Header
import { Nav, HeaderWrapper } from "./ui";
//////////////////////////////////////////////////

export const useTransition = () => {
  // TODO: uncomment if necessary
  // const [scrollY, setScrollY] = useState(0);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yPosition = window.scrollY;
      const scrolled = yPosition > (window.outerHeight * 0.1);

      // setScrollY(yPosition);
      setStartTransition(scrolled);
    };

    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  return { startTransition };
};

export const navItems = [
  {
    linkTo: '/',
    name: 'Home',
  },
  {
    name: 'FAQ',
    linkTo: '/faq',
  },
];

const NavMenu = ({ color, items, activeNavItem }) => (
  <Nav
    alignItems={{ xl: 'left'}}
    flexDirection={{ xs: 'column', sm: 'row' }}
  >
    {items.map(({ name, linkTo }, index) => (
      <Link passHref href={linkTo} key={index}>
        <StyledLink
          mx='16px'
          color={color}
          fontWeight='500'
          mb={{ xs: 10, sm: 0 }}
          fontSize={{ xs: 14, md: 15, lg: 16 }}
          opacity={activeNavItem(linkTo) ? 1 : 0.8}
        >
          {name}
        </StyledLink>
      </Link>
    ))}
  </Nav>
);

const Header = ({ router, handleOpenModal }) => {
  const { width } = useWindowSize();
  const [opened, setOpened] = useState(false);
  const { startTransition } = useTransition();

  const isNotMobileScreen = width > 640;
  const activeNavItem = navItem => navItem === router.asPath;
  const color = startTransition === false ? 'white' : 'black';
  const menuBoxShadow = startTransition ? 'rgb(0 0 0 / 50%) 0px 2px 2px 0px' : '0px 1px 1px #de1dde';

  return (
    <>
      <HeaderWrapper startTransition={startTransition}>
        <FlexBox
          mx='auto'
          width='100%'
          maxWidth={1200}
          alignItems='center'
          justifyContent='space-between'
          px={{ xs: 15, md: 20, lg: 40, xl: 0}}
        >
          <Link href='/' passHref>
            <a>
              <Icon
                h='100%'
                w='100%'
                width='140px'
                height='40px'
                color={color}
                iconName='xpathLogo'
              />
            </a>
          </Link>
          {
            isNotMobileScreen && <NavMenu color={color} items={navItems} activeNavItem={activeNavItem} />
          }
          <FlexBox alignItems='center'>
            {isNotMobileScreen && (
              <StyledLink
                mr={16}
                color={color}
                target='_blank'
                fontWeight='500'
                fontSize={{ xs: 14, md: 15, lg: 16 }}
                href='https://xpath.amoustms.com/login'
              >
                Portal Login
              </StyledLink>
            )}
            <Button
              borderRadius='100px'
              onClick={handleOpenModal}
              height={{ xs: 32, md: 36, lg: 40 }}
              width={{ xs: 100, md: 130, lg: 160 }}
              fontSize={{ xs: 14, md: 15, lg: 16 }}
              variant={startTransition ? 'secondary' : 'primary'}
            >
              Apply Now
            </Button>
            {!isNotMobileScreen && (
              <MenuIcon ml={20} color={color} opened={opened} handleClick={() => setOpened(!opened)} />
            )}
          </FlexBox>
        </FlexBox>
      </HeaderWrapper>
      <FixedFlexBox
        top='90px'
        width='100%'
        zIndex='100'
        alignItems='center'
        borderBLRadius='40px'
        borderBRRadius='40px'
        flexDirection='column'
        justifyContent='center'
        transition='all .5s ease'
        boxShadow={menuBoxShadow}
        height={opened ? '120px' : '0px'}
        bg={startTransition === false ? 'black' : 'white'}
      >
        {opened && (
          <nav>
            <Link passHref href='/'>
              <StyledLink
                color={color}
                display='block'
                fontWeight='500'
                fontSize={{ xs: 14, md: 15, lg: 16 }}
                opacity={activeNavItem('/') ? 1 : 0.8}
              >
                Home
              </StyledLink>
            </Link>
            <Link passHref href='/faq'>
              <StyledLink
                mt={10}
                color={color}
                display='block'
                fontWeight='500'
                fontSize={{ xs: 14, md: 15, lg: 16 }}
                opacity={activeNavItem('/faq') ? 1 : 0.8}
              >
                FAQ
              </StyledLink>
            </Link>
            <StyledLink
              mt={10}
              color={color}
              target='_blank'
              display='block'
              fontWeight='500'
              fontSize={{ xs: 14, md: 15, lg: 16 }}
              href='https://xpath.amoustms.com/login'
            >
              Portal Login
            </StyledLink>
          </nav>
        )}

      </FixedFlexBox>
      {/* {opened && (
        <FixedBox top='90px' width='100%' bg={startTransition === false ? 'black' : 'white'}>
          <NavMenu color={color} items={navItems} activeNavItem={activeNavItem} />
          <StyledLink
            mt={10}
            color={color}
            target='_blank'
            fontWeight='500'
            fontSize={{ xs: 14, md: 15, lg: 16 }}
            href='https://xpath.amoustms.com/login'
          >
              Portal Login
          </StyledLink>
        </FixedBox>
      )} */}
    </>
  );
};

export default Header;
