import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

import {
  black,
  buttonBlack,
  buttonBlue,
  buttonGray,
  white,
} from '../../../../constants/colors';
import { BUTTON_TYPE } from '../../constants';

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

export const S = {
  Button: styled.button`
    cursor: pointer;
    user-select: none;
    outline: none;
    font-size: 1.5em;
    border: none;
    border-radius: 50%;
    ${buttonStyle};
  ` as FC<ButtonProps>,
};
