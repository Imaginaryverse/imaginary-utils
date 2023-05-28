import { endOfHour } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 12, 30, 0);

describe('endOfHour', () => {
  describe('when given a valid date', () => {
    it('returns a date at the end of the hour', () => {
      expect(endOfHour(baseDate)).toEqual(
        new Date(2020, 0, 1, 12, 59, 59, 999)
      );
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => endOfHour(null as any)).toThrow('Invalid date');
    });
  });
});
