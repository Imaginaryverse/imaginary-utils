import { endOfDay } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 0, 0, 0, 0);

describe('endOfDay', () => {
  describe('when given a valid date', () => {
    it('returns a date with the time set to 23:59:59.999', () => {
      expect(endOfDay(baseDate)).toEqual(new Date(2020, 0, 1, 23, 59, 59, 999));
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => endOfDay(null as any)).toThrow('Invalid date');
    });
  });
});
