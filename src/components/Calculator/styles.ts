import styled from 'styled-components';

import { darkBlue, lightBlue, white } from '../../constants/colors';
import { DISPLAY_ROW, TOTAL_COLUMNS, TOTAL_ROWS } from './constants';

export const S = {
  Container: styled.div`
    width: 480px;
    height: 100vh;
    background: linear-gradient(${lightBlue}, ${darkBlue});
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(${TOTAL_COLUMNS}, 1fr);
    grid-template-rows: repeat(${TOTAL_ROWS}, 1fr);
    grid-gap: 0.5em;
  `,
  DisplaySection: styled.div`
    color: ${white};
    font-size: 4.5em;
    text-align: right;
    display: grid;
    align-items: end;
    grid-row: span ${DISPLAY_ROW};
    grid-column: span ${TOTAL_COLUMNS};
  `,
  ButtonSection: styled.div`
    grid-row: span ${TOTAL_ROWS - DISPLAY_ROW};
    grid-column: span ${TOTAL_COLUMNS};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 0.5em;
  `,
};
