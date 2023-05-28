import { DateFormat } from '../types';
import { getDateString } from '../dateUtils';

const baseDate = new Date(2020, 0, 1);

describe('getDateString', () => {
  describe('when given a valid date and no dateFormat', () => {
    it('returns a date string in the yyyy-MM-dd format', () => {
      expect(getDateString(baseDate)).toBe('2020-01-01');
    });
  });

  describe('when given a valid date and a dateFormat', () => {
    const formats: DateFormat[] = [
      'yy-MM-dd',
      'yy-M-d',
      'yyyy-MM-dd',
      'yyyy-M-d',
      'MM-dd-yy',
      'M-d-yy',
      'MM-dd-yyyy',
      'M-d-yyyy',
      'dd-MM-yy',
      'd-M-yy',
      'dd-MM-yyyy',
      'd-M-yyyy',
    ];

    const results = formats.map(format => getDateString(baseDate, format));

    it('returns a date string in the given format', () => {
      expect(results).toEqual([
        '20-01-01',
        '20-1-1',
        '2020-01-01',
        '2020-1-1',
        '01-01-20',
        '1-1-20',
        '01-01-2020',
        '1-1-2020',
        '01-01-20',
        '1-1-20',
        '01-01-2020',
        '1-1-2020',
      ]);
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => getDateString(new Date('invalid'))).toThrow('Invalid date');
    });
  });
});
