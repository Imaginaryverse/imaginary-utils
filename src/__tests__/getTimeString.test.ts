import { TimeFormat } from '../types';
import { getTimeString } from '../dateUtils';

const baseDate = new Date(2020, 0, 1, 12, 0, 0);

describe('getTimeString', () => {
  describe('when given a valid date and no timeFormat', () => {
    it('returns a time string in the hh:mm:ss format', () => {
      expect(getTimeString(baseDate)).toBe('12:00:00');
    });
  });

  describe('when given a valid date and a timeFormat', () => {
    const formats: TimeFormat[] = ['hh:mm:ss', 'h:m:s', 'hh:mm', 'h:m'];

    const results = formats.map(format => getTimeString(baseDate, format));

    it('returns a time string in the given format', () => {
      expect(results).toEqual(['12:00:00', '12:0:0', '12:00', '12:0']);
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => getTimeString(new Date('invalid'))).toThrow('Invalid date');
    });
  });
});
