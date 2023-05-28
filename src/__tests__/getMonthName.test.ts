import { getMonthName } from '../dateUtils';

const december = new Date(2020, 11, 1);
const january = new Date(2020, 0, 1);
const february = new Date(2020, 1, 1);
const march = new Date(2020, 2, 1);
const april = new Date(2020, 3, 1);
const may = new Date(2020, 4, 1);
const june = new Date(2020, 5, 1);
const july = new Date(2020, 6, 1);
const august = new Date(2020, 7, 1);
const september = new Date(2020, 8, 1);
const october = new Date(2020, 9, 1);
const november = new Date(2020, 10, 1);

describe('getMonthName', () => {
  describe('when given a valid date and no format', () => {
    it('returns the month name in the default short format', () => {
      expect(getMonthName(december)).toBe('Dec');
      expect(getMonthName(january)).toBe('Jan');
      expect(getMonthName(february)).toBe('Feb');
      expect(getMonthName(march)).toBe('Mar');
      expect(getMonthName(april)).toBe('Apr');
      expect(getMonthName(may)).toBe('May');
      expect(getMonthName(june)).toBe('June');
      expect(getMonthName(july)).toBe('July');
      expect(getMonthName(august)).toBe('Aug');
      expect(getMonthName(september)).toBe('Sept');
      expect(getMonthName(october)).toBe('Oct');
      expect(getMonthName(november)).toBe('Nov');
    });
  });

  describe('when given a valid date and a short format', () => {
    it('returns the month name in the short format', () => {
      expect(getMonthName(december, 'short')).toBe('Dec');
      expect(getMonthName(january, 'short')).toBe('Jan');
      expect(getMonthName(february, 'short')).toBe('Feb');
      expect(getMonthName(march, 'short')).toBe('Mar');
      expect(getMonthName(april, 'short')).toBe('Apr');
      expect(getMonthName(may, 'short')).toBe('May');
      expect(getMonthName(june, 'short')).toBe('June');
      expect(getMonthName(july, 'short')).toBe('July');
      expect(getMonthName(august, 'short')).toBe('Aug');
      expect(getMonthName(september, 'short')).toBe('Sept');
      expect(getMonthName(october, 'short')).toBe('Oct');
      expect(getMonthName(november, 'short')).toBe('Nov');
    });
  });

  describe('when given a valid date and a long format', () => {
    it('returns the month name in the long format', () => {
      expect(getMonthName(december, 'long')).toBe('December');
      expect(getMonthName(january, 'long')).toBe('January');
      expect(getMonthName(february, 'long')).toBe('February');
      expect(getMonthName(march, 'long')).toBe('March');
      expect(getMonthName(april, 'long')).toBe('April');
      expect(getMonthName(may, 'long')).toBe('May');
      expect(getMonthName(june, 'long')).toBe('June');
      expect(getMonthName(july, 'long')).toBe('July');
      expect(getMonthName(august, 'long')).toBe('August');
      expect(getMonthName(september, 'long')).toBe('September');
      expect(getMonthName(october, 'long')).toBe('October');
      expect(getMonthName(november, 'long')).toBe('November');
    });
  });

  describe('when given an invalid date', () => {
    it('throws an error', () => {
      expect(() => getMonthName(new Date('foo'))).toThrowError('Invalid date');
    });
  });
});
