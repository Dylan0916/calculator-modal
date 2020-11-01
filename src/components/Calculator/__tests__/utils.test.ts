import { RefObject } from 'react';

import * as actions from '../../../redux/actions';
import { BUTTON_TYPE } from '../constants';
import * as utils from '../utils';

describe('Calculator utils', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('dispatchHelpers', () => {
    const mockDispatch = jest.fn();

    it('should return correctly', () => {
      const expected = ['handleNumber', 'handleOperator', 'handleOtherFunc'];

      expect(Object.keys(utils.dispatchHelpers(jest.fn))).toEqual(expected);
    });

    it('should work correctly when calling handleNumber', () => {
      const mockValue = '123';
      const { handleNumber } = utils.dispatchHelpers(mockDispatch);

      expect(mockDispatch).not.toBeCalled();

      handleNumber(mockValue);

      expect(mockDispatch).toBeCalledWith({
        type: actions.CLICK_NUMBER,
        payload: { value: mockValue },
      });
    });

    describe('calling handleOperator', () => {
      it('should work correctly if buttonType is ADD', () => {
        const mockButtonType = BUTTON_TYPE.ADD;
        const { handleOperator } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOperator(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CLICK_OPERATOR,
          payload: { value: '+' },
        });
      });

      it('should work correctly if buttonType is SUBTRACT', () => {
        const mockButtonType = BUTTON_TYPE.SUBTRACT;
        const { handleOperator } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOperator(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CLICK_OPERATOR,
          payload: { value: '-' },
        });
      });

      it('should work correctly if buttonType is MULTIPLY', () => {
        const mockButtonType = BUTTON_TYPE.MULTIPLY;
        const { handleOperator } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOperator(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CLICK_OPERATOR,
          payload: { value: '*' },
        });
      });

      it('should work correctly if buttonType is DIVIDE', () => {
        const mockButtonType = BUTTON_TYPE.DIVIDE;
        const { handleOperator } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOperator(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CLICK_OPERATOR,
          payload: { value: '/' },
        });
      });
    });

    describe('calling handleOtherFunc', () => {
      it('should work correctly if buttonType is CLEAR_ALL', () => {
        const mockButtonType = BUTTON_TYPE.CLEAR_ALL;
        const { handleOtherFunc } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOtherFunc(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CLEAR,
        });
      });

      it('should work correctly if buttonType is INVERT', () => {
        const mockButtonType = BUTTON_TYPE.INVERT;
        const { handleOtherFunc } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOtherFunc(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CLICK_INVERT,
        });
      });

      it('should work correctly if buttonType is PERCENTAGE', () => {
        const mockButtonType = BUTTON_TYPE.PERCENTAGE;
        const { handleOtherFunc } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOtherFunc(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CLICK_PERCENTAGE,
        });
      });

      it('should work correctly if buttonType is DECIMAL', () => {
        const mockButtonType = BUTTON_TYPE.DECIMAL;
        const { handleOtherFunc } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOtherFunc(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CLICK_DECIMAL,
        });
      });

      it('should work correctly if buttonType is CALCULATE', () => {
        const mockButtonType = BUTTON_TYPE.CALCULATE;
        const { handleOtherFunc } = utils.dispatchHelpers(mockDispatch);

        expect(mockDispatch).not.toBeCalled();

        handleOtherFunc(mockButtonType);

        expect(mockDispatch).toBeCalledWith({
          type: actions.CALCULATE,
        });
      });
    });
  });

  describe('getOffset', () => {
    const mockElement = { getBoundingClientRect: () => ({ top: 1, left: 2 }) };
    const mockDownEvent = {
      path: [mockElement],
      offsetX: 1,
      offsetY: 2,
    };

    it('should return correctly when !calculatorRef.current', () => {
      const mockCalculatorRef = { current: null };

      expect(utils.getOffset(mockCalculatorRef, mockDownEvent)).toEqual({
        x: mockDownEvent.offsetX,
        y: mockDownEvent.offsetY,
      });
    });
  });

  describe('enableCalculatorDrag', () => {
    it('should return null if !calculatorRef.current', () => {
      const mockCalculatorRef = { current: null };

      expect(utils.enableCalculatorDrag(mockCalculatorRef)).toBeNull();
    });
  });
});
