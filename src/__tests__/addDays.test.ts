import { addDays } from '../dateUtils';

const baseDate = new Date(2020, 0, 1);

describe('addDays', () => {
  describe('when given a valid date and a valid number of days', () => {
    it('returns a new date with the given number of days added', () => {
      const result = addDays(baseDate, 5);

      expect(result).toEqual(new Date(2020, 0, 6));
    });
  });

  describe('when given a valid date and 0 days', () => {
    it('returns the same date', () => {
      const result = addDays(baseDate, 0);

      expect(result).toEqual(baseDate);
    });
  });

  describe('when given a valid date and a negative number of days', () => {
    it('returns a new date with the given number of days subtracted', () => {
      const result = addDays(baseDate, -5);

      expect(result).toEqual(new Date(2019, 11, 27));
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => addDays(null as any, 5)).toThrow('Invalid date');
    });
  });

  describe('when given an invalid number of days', () => {
    it('throws an error', () => {
      expect(() => addDays(baseDate, null as any)).toThrow(
        'numDays must be a number'
      );
    });
  });

  describe('when given a non-integer number of days', () => {
    it('throws an error', () => {
      expect(() => addDays(baseDate, 5.5)).toThrow(
        'numDays must be an integer'
      );
    });
  });
});
