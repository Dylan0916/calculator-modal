import styled from 'styled-components';

import { DISPLAY_ROW, TOTAL_COLUMNS, TOTAL_ROWS } from '../constants';

export const S = {
  Container: styled.div`
    grid-row: span ${TOTAL_ROWS - DISPLAY_ROW};
    grid-column: span ${TOTAL_COLUMNS};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 0.5em;
  `,
};
