import { State } from './types';

const MAX_DISPLAY_LEN = 9;

export function formatText(value: string) {
  let temp = 0;
  let newValue = '';

  for (const v of value) {
    if (!isNaN(+v)) {
      temp += 1;
    }

    newValue += v;

    if (temp === MAX_DISPLAY_LEN) {
      break;
    }
  }

  return newValue;
}

export function getNextDisplayText(
  state: State,
  actionPayload: Record<string, any>
) {
  const { displayText, operator } = state;
  const { value } = actionPayload;

  if (displayText === '0' || !!operator) {
    return value;
  }

  return displayText + value;
}
