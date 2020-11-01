import styled from 'styled-components';

import { darkBlue, lightBlue, white } from '../../constants/colors';
import {
  CALCULATE_CONTAINER_MIDDLE_WIDTH,
  CALCULATE_CONTAINER_WIDTH,
  DISPLAY_ROW,
  TOTAL_COLUMNS,
  TOTAL_ROWS,
} from './constants';

export const S = {
  OuterBox: styled.div`
    width: ${CALCULATE_CONTAINER_WIDTH}px;
    overflow: hidden;
    position: absolute;
    left: 0;

    @media (min-width: 480px) {
      top: 0;
    }

    @media (max-width: 768px) {
      width: ${CALCULATE_CONTAINER_MIDDLE_WIDTH}px;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 50vh;
      overflow-y: scroll;
      bottom: 0;
    }
  `,
  InnerBox: styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(${lightBlue}, ${darkBlue});
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(${TOTAL_COLUMNS}, 1fr);
    grid-template-rows: repeat(${TOTAL_ROWS}, 1fr);
    grid-gap: 0.5em;

    @media (max-width: 480px) {
      height: 100vh;
    }
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
