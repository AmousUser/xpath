import styled from 'styled-components';
import {
  top,
  left,
  right,
  space,
  width,
  order,
  color,
  bottom,
  height,
  border,
  display,
  opacity,
  minWidth,
  maxWidth,
  fontSize,
  flexWrap,
  position,
  overflow,
  overflowY,
  alignSelf,
  maxHeight,
  borderTop,
  textAlign,
  fontFamily,
  lineHeight,
  fontWeight,
  alignItems,
  borderLeft,
  background,
  borderColor,
  borderRight,
  buttonStyle,
  borderBottom,
  borderRadius,
  flexDirection,
  justifyContent,
} from 'styled-system';
////////////////////////////////////////////////////

export const Box = styled.div`
  ${space}
  ${width}
  ${order}
  ${color}
  ${height}
  ${border}
  ${opacity}
  ${display}
  ${minWidth}
  ${position}
  ${maxWidth}
  ${overflow}
  ${overflowY}
  ${fontSize}
  ${alignSelf}
  ${maxHeight}
  ${borderTop}
  ${background}
  ${borderLeft}
  ${borderColor}
  ${borderRight}
  ${borderBottom}
  ${borderRadius}
`;

export const FlexBox = styled(Box)`
  ${flexWrap}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}

  display: ${({ display }) => display || 'flex'};
`;

export const RelativeBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}

  position: relative;
`;

export const AbsoluteBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${display}

  position: absolute;
`;

export const Article = styled.article`
  ${space}
  ${width}
  ${color}
  ${height}
  ${maxWidth}
`;

export const Section = styled.section`
  ${space}
  ${width}
  ${height}
  ${maxWidth}
`;

const InstanceButton = styled.button`
  ${space}
  ${width}
  ${color}
  ${height}
  ${border}
  ${display}
  ${fontSize}
  ${alignSelf}
  ${fontWeight}
  ${background}
  ${borderColor}

  transition: ${({ transition }) => transition};
  text-transform: ${({ textTransform }) => textTransform};
`;

export const Button = styled(InstanceButton)(buttonStyle);

export const IconWrapper = styled.div`
  ${space}
  ${order}
  ${width}
  ${border}
  ${height}
  ${display}
  ${position}

  user-select: none;
  cursor: ${({ cursor }) => cursor || 'pointer'};
`;

export const StyledLink = styled.a`
  ${color}
  ${space}
  ${opacity}
  ${fontSize}
  ${fontWeight}
  cursor: pointer;
  text-transform: ${({ textTransform }) => textTransform};

  &:hover {
    color: ${({ hoveredColor }) => hoveredColor};
  }
`;

export const Text = styled.p`
  ${space}
  ${color}
  ${width}
  ${opacity}
  ${fontSize}
  ${maxWidth}
  ${textAlign}
  ${lineHeight}
  ${fontFamily}
  ${fontWeight}

  cursor: ${({ cursor }) => cursor};
  word-break: ${({ wordBreak }) => wordBreak};
  text-decoration: ${({ textDecoration }) => textDecoration};
  overflow: ${({ withEllipsis }) => withEllipsis ? 'hidden' : 'initial'};
  white-space: ${({ withEllipsis }) => withEllipsis ? 'nowrap' : 'initial'};
  text-overflow: ${({ withEllipsis }) => withEllipsis ? 'ellipsis' : 'initial'};
`;

export const PageTitle = styled.h1`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontFamily}
  ${fontWeight}

  text-transform: ${({ textTransform }) => textTransform};
`;

export const SectionTitle = styled.h2`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${fontFamily}

  text-transform: ${({ textTransform }) => textTransform};
`;

export const ArticleTitle = styled.h3`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}

  text-transform: ${({ textTransform }) => textTransform};
`;
