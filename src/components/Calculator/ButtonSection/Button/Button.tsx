import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../redux';
import { BUTTON_TYPE } from '../../constants';
import { dispatchHelpers } from '../../utils';
import { DisplaySpec } from '../spec';
import { S } from './styles';

interface Props {
  data: DisplaySpec;
}

function Button(props: Props) {
  const displayText = useSelector<RootState, string>(
    state => state.displayText
  );
  const {
    data: { type, defaultText, getText },
  } = props;
  const dispatch = useDispatch();
  const {
    handleClickAll,
    handlePercentageClick,
    handleNumber,
    handleDecimal,
    handleOperator,
    handleCalculate,
  } = dispatchHelpers(dispatch);

  const onClick = () => {
    switch (type) {
      case BUTTON_TYPE.CLEAR_ALL: {
        handleClickAll();
        break;
      }
      case BUTTON_TYPE.PERCENTAGE: {
        handlePercentageClick();
        break;
      }
      case BUTTON_TYPE.NUMBER: {
        handleNumber(defaultText);
        break;
      }
      case BUTTON_TYPE.DECIMAL: {
        handleDecimal();
        break;
      }
      case BUTTON_TYPE.ADD:
      case BUTTON_TYPE.SUBTRACT:
      case BUTTON_TYPE.MULTIPLY:
      case BUTTON_TYPE.DIVIDE: {
        handleOperator(type);
        break;
      }
      case BUTTON_TYPE.CALCULATE: {
        handleCalculate();
        break;
      }
      default:
        break;
    }
  };

  return (
    <S.Button
      key={defaultText}
      text={defaultText}
      buttonType={type}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: getText(defaultText, displayText) }}
    />
  );
}

export default Button;
