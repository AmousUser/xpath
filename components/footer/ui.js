import styled from 'styled-components';
import { color, space, layout, compose, flexbox } from 'styled-system';
//////////////////////////////////////////////////

export const StyledFooter = styled('footer')(
  compose(
    color,
    space,
    layout,
    flexbox,
  )
);
