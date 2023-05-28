import { isValidDate } from '../dateUtils';

describe('isValidDate', () => {
  describe('when given a valid date', () => {
    it('returns true', () => {
      expect(isValidDate(new Date())).toBe(true);
    });
  });

  describe('when given an invalid date', () => {
    it('returns false', () => {
      expect(isValidDate(new Date('foo'))).toBe(false);
    });
  });

  describe('when given null', () => {
    it('returns false', () => {
      expect(isValidDate(null as any)).toBe(false);
    });
  });

  describe('when given undefined', () => {
    it('returns false', () => {
      expect(isValidDate(undefined as any)).toBe(false);
    });
  });

  describe('when given a number', () => {
    it('returns false', () => {
      expect(isValidDate(123 as any)).toBe(false);
    });
  });

  describe('when given a string', () => {
    it('returns false', () => {
      expect(isValidDate('foo' as any)).toBe(false);
    });
  });

  describe('when given an object', () => {
    it('returns false', () => {
      expect(isValidDate({} as any)).toBe(false);
    });
  });

  describe('when given an array', () => {
    it('returns false', () => {
      expect(isValidDate([] as any)).toBe(false);
    });
  });
});
