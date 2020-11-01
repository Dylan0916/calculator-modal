import { RefObject } from 'react';
import { Dispatch } from 'redux';
import { Subscription, fromEvent } from 'rxjs';
import {
  concatAll,
  filter,
  map,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';

import * as actions from '../../redux/actions';
import { showNumberWithComma } from '../../utils/numberHelpers';
import { BUTTON_TYPE } from './constants';

type HandleOperatorParam =
  | BUTTON_TYPE.ADD
  | BUTTON_TYPE.SUBTRACT
  | BUTTON_TYPE.MULTIPLY
  | BUTTON_TYPE.DIVIDE;

type HandleOtherFunc =
  | BUTTON_TYPE.CLEAR_ALL
  | BUTTON_TYPE.PERCENTAGE
  | BUTTON_TYPE.INVERT
  | BUTTON_TYPE.DECIMAL
  | BUTTON_TYPE.CALCULATE;

export function dispatchHelpers(dispatch: Dispatch) {
  const handleNumber = (value: string) => {
    dispatch({
      type: actions.CLICK_NUMBER,
      payload: { value },
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

  const handleOtherFunc = (buttonType: HandleOtherFunc) => {
    const actionMapping = {
      [BUTTON_TYPE.CLEAR_ALL]: actions.CLEAR,
      [BUTTON_TYPE.INVERT]: actions.CLICK_INVERT,
      [BUTTON_TYPE.PERCENTAGE]: actions.CLICK_PERCENTAGE,
      [BUTTON_TYPE.DECIMAL]: actions.CLICK_DECIMAL,
      [BUTTON_TYPE.CALCULATE]: actions.CALCULATE,
    };

    dispatch({
      type: actionMapping[buttonType],
    });
  };

  return {
    handleNumber,
    handleOperator,
    handleOtherFunc,
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

function getOffset(
  calculatorRef: RefObject<HTMLDivElement>,
  downEvent: any
): { x: number; y: number } {
  const { path, offsetX, offsetY } = downEvent;

  if (!calculatorRef.current) {
    return { x: offsetX, y: offsetY };
  }

  const target = path[0];
  const distanceX =
    target.getBoundingClientRect().left +
    offsetX -
    calculatorRef.current.getBoundingClientRect().left;
  const distanceY =
    target.getBoundingClientRect().top +
    offsetY -
    calculatorRef.current.getBoundingClientRect().top;

  return {
    x: distanceX || offsetX,
    y: distanceY || offsetY,
  };
}

export function enableCalculatorDrag(calculatorRef: RefObject<HTMLDivElement>) {
  if (!calculatorRef.current) {
    return null;
  }

  const mouseDown$ = fromEvent(calculatorRef.current, 'mousedown');
  const mouseMove$ = fromEvent(document, 'mousemove');
  const mouseUp$ = fromEvent(document, 'mouseup');

  return mouseDown$
    .pipe(
      filter((event: any) => {
        return !event.path[0].classList.contains('calculator__btn');
      }),
      map(() => mouseMove$.pipe(takeUntil(mouseUp$))),
      concatAll(),
      withLatestFrom(mouseDown$, (move: any, down: any) => {
        const { x: offsetX, y: offsetY } = getOffset(calculatorRef, down);

        return {
          x: move.clientX - offsetX,
          y: move.clientY - offsetY,
        };
      })
    )
    .subscribe(position => {
      calculatorRef.current!.style.top = `${position.y}px`;
      calculatorRef.current!.style.left = `${position.x}px`;
    });
}
