import { startOfDay } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 12, 0, 0);

describe('startOfDay', () => {
  describe('when given a valid date', () => {
    it('returns a date at midnight', () => {
      expect(startOfDay(baseDate)).toEqual(new Date(2020, 0, 1, 0, 0, 0));
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => startOfDay(null as any)).toThrow('Invalid date');
    });
  });
});
