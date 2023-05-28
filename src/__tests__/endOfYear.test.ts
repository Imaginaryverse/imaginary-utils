import { endOfYear } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 12, 0, 0);

describe('endOfYear', () => {
  describe('when given a valid date', () => {
    it('returns a date at midnight on the last day of the year', () => {
      expect(endOfYear(baseDate)).toEqual(
        new Date(2020, 11, 31, 23, 59, 59, 999)
      );
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => endOfYear(null as any)).toThrow('Invalid date');
    });
  });
});
