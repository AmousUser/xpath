import styled from 'styled-components';
import {
  space,
  display,
  flexWrap,
  alignItems,
  flexDirection,
  justifyContent,
} from 'styled-system';
//////////////////////////////////////////////////

export const HeaderWrapper = styled.header`
  top: 0;
  z-index: 100;
  height: 90px;
  width: 100vw;
  display: flex;
  position: fixed;
  align-items: center;

  background: ${({ startTransition }) => startTransition ? 'white' : 'black'};
  box-shadow: ${({ startTransition }) => startTransition ? 'rgb(0 0 0 / 50%) 0px 2px 20px 0px' : 'unset'};
  transition: ${({ startTransition }) => startTransition ? 'background .3s ease-in' : 'background .3s ease-out'};
`;

export const Nav = styled.nav`
  ${space}
  ${display}
  ${flexWrap}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}

  display: ${({ display }) => display || 'flex'};
`;
