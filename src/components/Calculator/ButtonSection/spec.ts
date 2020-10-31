import { BUTTON_TYPE } from '../constants';

export interface DisplaySpec {
  type: BUTTON_TYPE;
  defaultText: string;
  getText: (text: string, displayText: string) => string;
}

const defaultGetText = (text: string) => text;

export const displaySpec: DisplaySpec[] = [
  {
    type: BUTTON_TYPE.CLEAR_ALL,
    defaultText: 'C',
    getText: (text: string, displayText: string) =>
      displayText === '0' ? 'AC' : text,
  },
  {
    type: BUTTON_TYPE.INVERT,
    defaultText: '+/-',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.PERCENTAGE,
    defaultText: '%',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.DIVIDE,
    defaultText: '&divide;',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '7',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '8',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '9',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.MULTIPLY,
    defaultText: '&times;',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '4',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '5',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '6',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.SUBTRACT,
    defaultText: '&minus;',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '1',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '2',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '3',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.ADD,
    defaultText: '&plus;',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    defaultText: '0',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.DECIMAL,
    defaultText: '.',
    getText: defaultGetText,
  },
  {
    type: BUTTON_TYPE.CALCULATE,
    defaultText: '&equals;',
    getText: defaultGetText,
  },
];
