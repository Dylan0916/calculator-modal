import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

import {
  black,
  buttonBlack,
  buttonBlue,
  buttonGray,
  white,
} from '../../../../constants/colors';
import { FONT_SIZE } from '../../../../constants/misc';
import {
  BUTTON_TYPE,
  CALCULATE_CONTAINER_MIDDLE_WIDTH,
  CALCULATE_CONTAINER_WIDTH,
} from '../../constants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType: BUTTON_TYPE;
}

const buttonStyle = ({ text, buttonType }: ButtonProps) => {
  switch (buttonType) {
    case BUTTON_TYPE.CLEAR_ALL:
    case BUTTON_TYPE.INVERT:
    case BUTTON_TYPE.PERCENTAGE: {
      return {
        backgroundColor: buttonGray,
        color: black,
      };
    }
    case BUTTON_TYPE.ADD:
    case BUTTON_TYPE.MULTIPLY:
    case BUTTON_TYPE.SUBTRACT:
    case BUTTON_TYPE.DIVIDE:
    case BUTTON_TYPE.CALCULATE: {
      return {
        backgroundColor: buttonBlue,
        color: white,
      };
    }
    case BUTTON_TYPE.NUMBER:
    case BUTTON_TYPE.DECIMAL:
    default: {
      const result: any = { backgroundColor: buttonBlack, color: white };

      if (text === '0') {
        result.gridColumn = 'span 2';
        result.borderRadius = '2.5em';
        result.paddingLeft = '2em';
        result.textAlign = 'left';
      }

      return result;
    }
  }
};

const getContainerWidth = () => {
  if (window.innerWidth > 768) {
    return CALCULATE_CONTAINER_WIDTH;
  }

  return window.innerWidth > 480
    ? CALCULATE_CONTAINER_MIDDLE_WIDTH
    : window.innerWidth;
};

const gridGap = FONT_SIZE / 2;
const buttonHeight = (getContainerWidth() - FONT_SIZE * 2 - gridGap * 3) / 4;

export const S = {
  Button: styled.button`
    cursor: pointer;
    user-select: none;
    outline: none;
    font-size: 1.5em;
    border: none;
    border-radius: 50%;
    padding: 0;
    height: ${buttonHeight}px;
    ${buttonStyle};
  ` as FC<ButtonProps>,
};
