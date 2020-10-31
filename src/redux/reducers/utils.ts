import { State } from './types';

const MAX_DISPLAY_LEN = 9;

export function formatText(value: string | number) {
  const newValue = typeof value === 'string' ? value : `${value}`;
  let temp = 0;
  let result = '';

  for (const v of newValue) {
    if (!isNaN(+v)) {
      temp += 1;
    }

    result += v;

    if (temp === MAX_DISPLAY_LEN) {
      break;
    }
  }

  return result;
}

export function getNextDisplayText(
  state: State,
  actionPayload: Record<string, any>
): string {
  const { displayText, operator, isUseInvert } = state;
  const { value } = actionPayload;

  if (isUseInvert) {
    return `-${value}`;
  }

  if (displayText === '0' || !!operator) {
    return value;
  }

  return displayText + value;
}
