import styled from 'styled-components';
import {
  space,
  width,
  height,
} from 'styled-system';
////////////////////////////////////////////////////

const getBorderColor = hasError => hasError ? '#ce2828' : '#BDC2C4';

export const StyledInput = styled.input`
  ${space}
  ${width}
  ${height}

  border: 1px solid;
  border-radius: 4px;

  border-color: ${({ hasError }) => getBorderColor(hasError)};
`;

export const RadioInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  ${space}

  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const StyledTextArea = styled.textarea`
  ${space}
  ${width}
  ${height}

  resize: vertical;
  border: 1px solid;
  border-radius: 4px;

  border-color: ${({ hasError }) => getBorderColor(hasError)};
`;
