import { createGlobalStyle } from 'styled-components';
////////////////////////////////////////////////////

export default createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    font-family: Poppins;

    a {
      text-decoration: none;
    }

  * {
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    font-style: inherit;
    font-family: inherit;
    font-weight: inherit;
    box-sizing: border-box;
    background: transparent;
    vertical-align: baseline;
  }
`;
