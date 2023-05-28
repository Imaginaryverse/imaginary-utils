import { endOfMonth } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 12, 0, 0);

describe('endOfMonth', () => {
  describe('when given a valid date', () => {
    it('returns a date at midnight on the last day of the month', () => {
      expect(endOfMonth(baseDate)).toEqual(
        new Date(2020, 0, 31, 23, 59, 59, 999)
      );
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => endOfMonth(null as any)).toThrow('Invalid date');
    });
  });
});
