import { getDaysInMonth } from '../dateUtils';

const baseDate = new Date('2020-01-01T00:00:00.000Z');

describe('getDaysInMonth', () => {
  describe('when given a valid date', () => {
    it('returns all days in the month', () => {
      const result = getDaysInMonth(baseDate);
      expect(result).toMatchSnapshot();
      expect(result.length).toBe(31);
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => getDaysInMonth(null as any)).toThrow('Invalid date');
    });
  });
});
