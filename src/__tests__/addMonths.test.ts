import { addMonths } from '../dateUtils';

const baseDate = new Date(2020, 0, 1);

describe('addMonths', () => {
  describe('when given a valid date and a positive number of months', () => {
    it('returns a date with the given number of months added', () => {
      expect(addMonths(baseDate, 3)).toEqual(new Date(2020, 3, 1));
    });
  });

  describe('when given a valid date and 0 months', () => {
    it('returns the same date', () => {
      expect(addMonths(baseDate, 0)).toEqual(baseDate);
    });
  });

  describe('when given a valid date and a negative number of months', () => {
    it('returns a date with the given number of months subtracted', () => {
      expect(addMonths(baseDate, -3)).toEqual(new Date(2019, 9, 1));
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => addMonths(null as any, 5)).toThrow('Invalid date');
    });
  });

  describe('when given an invalid number of months', () => {
    it('throws an error', () => {
      expect(() => addMonths(baseDate, null as any)).toThrow(
        'numMonths must be a number'
      );
    });
  });

  describe('when given a non-integer number of months', () => {
    it('throws an error', () => {
      expect(() => addMonths(baseDate, 5.5)).toThrow(
        'numMonths must be an integer'
      );
    });
  });
});
