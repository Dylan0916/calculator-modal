import * as numberHelpers from '../numberHelpers';

describe('numberHelpers', () => {
  describe('showNumberWithComma', () => {
    it('should return value correctly when params is a number value', () => {
      expect(numberHelpers.showNumberWithComma(1234)).toBe('1,234');
    });

    it('should return value correctly when params is a string value', () => {
      expect(numberHelpers.showNumberWithComma('1234')).toBe('1,234');
    });
  });
});
