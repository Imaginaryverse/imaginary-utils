import { startOfYear } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 12, 0, 0);

describe('startOfYear', () => {
  describe('when given a valid date', () => {
    it('returns a date at midnight on the first day of the year', () => {
      expect(startOfYear(baseDate)).toEqual(new Date(2020, 0, 1, 0, 0, 0));
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => startOfYear(null as any)).toThrow('Invalid date');
    });
  });
});
