import { capitalize } from '../stringUtils';

describe('capitalize', () => {
  describe('when given a string', () => {
    it('capitalizes the first letter of the string', () => {
      expect(capitalize('hello world')).toBe('Hello world');
    });
  });

  describe('when given a non-string', () => {
    it('throws an error', () => {
      expect(() => capitalize(1 as any)).toThrowError();
    });
  });

  describe('when given an empty string', () => {
    it('returns an empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('when given a string with only one letter', () => {
    it('capitalizes the first letter of the string', () => {
      expect(capitalize('h')).toBe('H');
    });
  });

  describe('when given a string with only one letter and the letter is capitalized', () => {
    it('capitalizes the first letter of the string', () => {
      expect(capitalize('H')).toBe('H');
    });
  });
});
