import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    position: relative;
    box-sizing: border-box;
  };

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',  'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`;
