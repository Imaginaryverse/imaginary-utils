import { startOfMonth } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 12, 0, 0);

describe('startOfMonth', () => {
  describe('when given a valid date', () => {
    it('returns a date at midnight on the first day of the month', () => {
      expect(startOfMonth(baseDate)).toEqual(new Date(2020, 0, 1, 0, 0, 0));
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => startOfMonth(null as any)).toThrow('Invalid date');
    });
  });
});
