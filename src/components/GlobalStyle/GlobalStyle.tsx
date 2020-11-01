import { createGlobalStyle } from 'styled-components';

import { FONT_SIZE } from '../../constants/misc';

export default createGlobalStyle`
  * {
    position: relative;
    box-sizing: border-box;
    font-size: ${FONT_SIZE}px;
  };

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',  'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  #root {
    height: inherit;
  }
`;
