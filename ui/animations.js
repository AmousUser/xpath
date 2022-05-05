import styled, { css, keyframes } from 'styled-components';
import {
  top,
  left,
  width,
  space,
  height,
  position,
  boxShadow,
  background,
  borderRadius,
} from 'styled-system';
////////////////////////////////////////////////////

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const defaultAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

export const getAnimationName = (animationName) => {
  switch (animationName) {
    case 'fade-in':
      return fadeIn;
    case 'fade-out':
      return fadeOut;
    default:
      return defaultAnimation;
  }
};

export const animation = ({ animationName, animationProps }) => css`
  animation: ${getAnimationName(animationName)} ${animationProps};
`;

export const AnimatedBox = styled.div`
  ${top}
  ${left}
  ${space}
  ${width}
  ${height}
  ${position}
  ${animation}
  ${boxShadow}
  ${background}
  ${borderRadius}
`;
