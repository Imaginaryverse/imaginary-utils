import { addYears } from '../dateUtils';

const baseDate = new Date(2020, 0, 1);

describe('addYears', () => {
  describe('when given a valid date and a positive number of years', () => {
    it('returns a date with the given number of years added', () => {
      expect(addYears(baseDate, 3)).toEqual(new Date(2023, 0, 1));
    });
  });

  describe('when given a valid date and 0 years', () => {
    it('returns the same date', () => {
      expect(addYears(baseDate, 0)).toEqual(baseDate);
    });
  });

  describe('when given a valid date and a negative number of years', () => {
    it('returns a date with the given number of years subtracted', () => {
      expect(addYears(baseDate, -3)).toEqual(new Date(2017, 0, 1));
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => addYears(null as any, 5)).toThrow('Invalid date');
    });
  });

  describe('when given an invalid number of years', () => {
    it('throws an error', () => {
      expect(() => addYears(baseDate, null as any)).toThrow(
        'numYears must be a number'
      );
    });
  });

  describe('when given a non-integer number of years', () => {
    it('throws an error', () => {
      expect(() => addYears(baseDate, 5.5)).toThrow(
        'numYears must be an integer'
      );
    });
  });
});
