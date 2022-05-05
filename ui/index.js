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
  zIndex,
  display,
  opacity,
  minWidth,
  maxWidth,
  flexWrap,
  position,
  overflow,
  fontSize,
  overflowY,
  minHeight,
  boxShadow,
  textAlign,
  alignSelf,
  maxHeight,
  borderTop,
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
  backgroundColor,
} from 'styled-system';
////////////////////////////////////////////////////

export const Box = styled.div`
  ${space}
  ${width}
  ${order}
  ${color}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${display}
  ${minWidth}
  ${position}
  ${maxWidth}
  ${overflow}
  ${minHeight}
  ${overflowY}
  ${alignSelf}
  ${textAlign}
  ${maxHeight}
  ${borderTop}
  ${background}
  ${borderLeft}
  ${borderRight}
  ${borderBottom}
  ${borderColor}
  ${borderRadius}

  cursor: ${({ cursor }) => cursor};
  transition: ${({ transition }) => transition};
`;

export const FlexBox = styled(Box)`
  ${maxWidth}
  ${flexWrap}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}

  display: ${({ display }) => display || 'flex'};
`;

export const HoveredFlexBox = styled(FlexBox)`
  &:hover {
    color: ${({ hoveredColor }) => hoveredColor};
    font-weight: ${({ hoveredFontWeight }) => hoveredFontWeight};
  }
`;

export const RelativeBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}

  position: relative;
`;

export const RelativeFlexBox = styled(FlexBox)`
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

export const FixedFlexBox = styled(FlexBox)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${boxShadow}

  position: fixed;
  
  transition: ${({ transition }) => transition};
  border-bottom-left-radius: ${({ borderBLRadius }) => borderBLRadius};
  border-bottom-right-radius: ${({ borderBRRadius }) => borderBRRadius};
`;

export const Article = styled.article`
  ${space}
  ${width}
  ${color}
  ${height}
  ${display}
  ${fontSize}
  ${maxWidth}
  ${background}
  ${backgroundColor}
`;

export const Section = styled.section`
  ${space}
  ${width}
  ${color}
  ${height}
  ${zIndex}
  ${position}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${borderTop}
  ${background}
  ${alignItems}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${flexDirection}
  ${justifyContent}

  cursor: ${({ cursor }) => cursor};
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
  cursor: ${({ cursor }) => cursor || 'pointer'};
  text-transform: ${({ textTransform }) => textTransform};
`;

export const Button = styled(InstanceButton)(buttonStyle);

export const IconWrapper = styled.div`
  ${space}
  ${order}
  ${width}
  ${right}
  ${bottom}
  ${border}
  ${height}
  ${display}
  ${position}

  user-select: none;
  transform: ${({ transform }) => transform};
  cursor: ${({ cursor }) => cursor || 'pointer'};
`;

export const StyledLink = styled.a`
  ${color}
  ${space}
  ${display}
  ${opacity}
  ${fontSize}
  ${fontWeight}
  ${justifyContent}

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
  ${borderBottom}
  ${borderColor}
  
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
  ${width}
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
  ${width}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}

  text-transform: ${({ textTransform }) => textTransform};
`;

export const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  position: fixed;
  align-items: center;
  backdrop-filter: blur(20px);

  background: ${({ background }) => background};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
`;
