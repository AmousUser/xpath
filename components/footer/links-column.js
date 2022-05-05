import Link from 'next/link';
// icons
import Icon from '../../icons';
// ui
import { Box, Text, FlexBox, StyledLink, SectionTitle } from '../../ui';
//////////////////////////////////////////////////

const LinkName = ({ link }) => (
  <Text
    ml={link.ml}
    width={link.width}
    textDecoration={link.textDecoration}
    fontSize={{ xs: 14, lg: 15, xl: 16 }}
  >
    {link.name}
  </Text>
);

const LinksColumn = ({ links, title, activeNavItem, handleOpenModal }) => (
  <Box px={10} pb={{ xs: 20, sm: 0 }}>
    <SectionTitle pb={15} fontSize={{ xs: 18, lg: 19, xl: 20 }}>
      {title}
    </SectionTitle>
    <FlexBox flexDirection='column'>
      {links.map((link, index) =>
        link.routerLink ? (
          <Link passHref key={index} href={link.linkTo}>
            <StyledLink
              py='5px'
              opacity={activeNavItem && activeNavItem(link.linkTo) ? 1 : 0.8}
            >
              <LinkName link={link} />
            </StyledLink>
          </Link>
        ) : (
          <StyledLink
            py='5px'
            key={index}
            display='flex'
            href={link.linkTo}
            target={link.externalLink && '_blank'}
            onClick={link.modal && handleOpenModal}
            opacity={activeNavItem && activeNavItem(link.linkTo) ? 1 : 0.8}
          >
            {link.icon && (
              <Icon
                w='100%'
                h='100%'
                width='16px'
                height='16px'
                iconName={link.icon}
              />
            )}
            <LinkName link={link} />
          </StyledLink>
        )
      )}
    </FlexBox>
  </Box>
);

export default LinksColumn;
