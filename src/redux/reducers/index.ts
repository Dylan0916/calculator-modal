import { AnyAction } from 'redux';

import * as actions from '../actions';
import { State } from './types';
import { formatText, getNextDisplayText } from './utils';

const defaultState: State = {
  displayText: '0',
  evalAry: [],
  operator: null,
  isUseInvert: false,
};

export default (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case actions.CLEAR: {
      const { evalAry } = state;

      if (evalAry.length === 0) {
        return defaultState;
      }

      return {
        ...state,
        displayText: '0',
      };
    }
    case actions.CLICK_INVERT: {
      const { displayText, operator, isUseInvert } = state;

      if (operator) {
        return {
          ...state,
          isUseInvert: !isUseInvert,
        };
      }

      const nextText =
        displayText === '0' ? `-${displayText}` : `${+displayText * -1}`;

      return {
        ...state,
        displayText: nextText,
      };
    }
    case actions.CLICK_PERCENTAGE: {
      const { displayText } = state;

      return {
        ...state,
        displayText: `${+displayText / 100}`,
      };
    }
    case actions.CLICK_NUMBER: {
      const { evalAry, operator } = state;
      const nextEvalAry = [...evalAry];

      if (!!operator) {
        nextEvalAry.push(operator);
      }

      const nextText = getNextDisplayText(state, action.payload);

      return {
        ...state,
        displayText: formatText(nextText),
        evalAry: nextEvalAry,
        operator: null,
      };
    }
    case actions.CLICK_DECIMAL: {
      const { displayText } = state;
      const hasDecimal = /\./.test(displayText);

      if (hasDecimal) {
        return state;
      }

      return {
        ...state,
        displayText: displayText + '.',
      };
    }
    case actions.CLICK_OPERATOR: {
      const { displayText, evalAry, operator } = state;
      const { value } = action.payload;

      return {
        ...state,
        operator: value,
        evalAry: operator ? evalAry : evalAry.concat(displayText),
      };
    }
    case actions.CALCULATE: {
      const { displayText, evalAry, operator } = state;
      const copyEvalAry = [...evalAry];
      let nextDisplayText = +displayText;

      if (!!operator) {
        copyEvalAry.push(operator, displayText);
        nextDisplayText = eval(copyEvalAry.join(' '));
      } else {
        copyEvalAry.push(displayText);
        nextDisplayText = eval(copyEvalAry.join(' '));
      }

      // To fix 0.1 + 0.2 !== 0.3 issue
      nextDisplayText = +nextDisplayText.toPrecision(12);

      return {
        ...state,
        ...defaultState,
        displayText: formatText(nextDisplayText),
      };
    }
    default: {
      return state;
    }
  }
};
