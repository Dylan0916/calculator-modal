import { Dispatch } from 'redux';

import * as actions from '../../redux/actions';
import { showNumberWithComma } from '../../utils/numberHelpers';
import { BUTTON_TYPE } from './constants';

type HandleOperatorParam =
  | BUTTON_TYPE.ADD
  | BUTTON_TYPE.SUBTRACT
  | BUTTON_TYPE.MULTIPLY
  | BUTTON_TYPE.DIVIDE;

export function dispatchHelpers(dispatch: Dispatch) {
  const handleClickAll = () => {
    dispatch({
      type: actions.CLEAR,
    });
  };

  const handlePercentageClick = () => {
    dispatch({
      type: actions.CLICK_PERCENTAGE,
    });
  };

  const handleNumber = (value: string) => {
    dispatch({
      type: actions.CLICK_NUMBER,
      payload: { value },
    });
  };

  const handleDecimal = () => {
    dispatch({
      type: actions.CLICK_DECIMAL,
    });
  };

  const handleOperator = (buttonType: HandleOperatorParam) => {
    const mapping = {
      [BUTTON_TYPE.ADD]: '+',
      [BUTTON_TYPE.SUBTRACT]: '-',
      [BUTTON_TYPE.MULTIPLY]: '*',
      [BUTTON_TYPE.DIVIDE]: '/',
    };

    dispatch({
      type: actions.CLICK_OPERATOR,
      payload: { value: mapping[buttonType] },
    });
  };

  const handleCalculate = () => {
    dispatch({
      type: actions.CALCULATE,
    });
  };

  return {
    handlePercentageClick,
    handleNumber,
    handleClickAll,
    handleDecimal,
    handleOperator,
    handleCalculate,
  };
}

export function formatDisplayText(value: string) {
  const hasDecimal = /\./.test(value);

  if (+value < 0.000001) {
    return value;
  }

  if (hasDecimal) {
    const split = value.split('.');

    return `${showNumberWithComma(split[0])}.${split[1]}`;
  }

  return showNumberWithComma(value);
}
