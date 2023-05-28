import { getDayName } from '../dateUtils';

const sunday = new Date('2020-06-07T00:00:00.000Z');
const monday = new Date('2020-06-01T00:00:00.000Z');
const tuesday = new Date('2020-06-02T00:00:00.000Z');
const wednesday = new Date('2020-06-03T00:00:00.000Z');
const thursday = new Date('2020-06-04T00:00:00.000Z');
const friday = new Date('2020-06-05T00:00:00.000Z');
const saturday = new Date('2020-06-06T00:00:00.000Z');

describe('getDayName', () => {
  describe('when given a valid date and no format', () => {
    it('returns the day name in the default short format', () => {
      expect(getDayName(sunday)).toBe('Sun');
      expect(getDayName(monday)).toBe('Mon');
      expect(getDayName(tuesday)).toBe('Tue');
      expect(getDayName(wednesday)).toBe('Wed');
      expect(getDayName(thursday)).toBe('Thu');
      expect(getDayName(friday)).toBe('Fri');
      expect(getDayName(saturday)).toBe('Sat');
    });
  });

  describe('when given a valid date and a short format', () => {
    it('returns the day name in the short format', () => {
      expect(getDayName(sunday, 'short')).toBe('Sun');
      expect(getDayName(monday, 'short')).toBe('Mon');
      expect(getDayName(tuesday, 'short')).toBe('Tue');
      expect(getDayName(wednesday, 'short')).toBe('Wed');
      expect(getDayName(thursday, 'short')).toBe('Thu');
      expect(getDayName(friday, 'short')).toBe('Fri');
      expect(getDayName(saturday, 'short')).toBe('Sat');
    });
  });

  describe('when given a valid date and a long format', () => {
    it('returns the day name in the long format', () => {
      expect(getDayName(sunday, 'long')).toBe('Sunday');
      expect(getDayName(monday, 'long')).toBe('Monday');
      expect(getDayName(tuesday, 'long')).toBe('Tuesday');
      expect(getDayName(wednesday, 'long')).toBe('Wednesday');
      expect(getDayName(thursday, 'long')).toBe('Thursday');
      expect(getDayName(friday, 'long')).toBe('Friday');
      expect(getDayName(saturday, 'long')).toBe('Saturday');
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => getDayName(new Date(''))).toThrow();
    });
  });
});
