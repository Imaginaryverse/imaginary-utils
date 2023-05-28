import { startOfHour } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 12, 30, 0);

describe('startOfHour', () => {
  describe('when given a valid date', () => {
    it('returns a date at the start of the hour', () => {
      expect(startOfHour(baseDate)).toEqual(new Date(2020, 0, 1, 12, 0, 0));
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => startOfHour(null as any)).toThrow('Invalid date');
    });
  });
});
