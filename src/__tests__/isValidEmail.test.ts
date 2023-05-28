import { isValidEmail } from '../emailUtils';

describe('isValidEmail', () => {
  describe('when given a valid email address', () => {
    it('returns true', () => {
      expect(isValidEmail('john.doe123@hello-world.com')).toBe(true);
    });
  });

  describe('when given an invalid email address', () => {
    it('returns false', () => {
      expect(isValidEmail('@hello-world.com')).toBe(false);
      expect(isValidEmail('john.doe123@hello-world')).toBe(false);
      expect(isValidEmail('john.doe123&hello-world.com')).toBe(false);
    });
  });

  describe('when given a non-string', () => {
    it('throws an error', () => {
      expect(() => isValidEmail(1 as any)).toThrowError();
    });
  });

  describe('when given an empty string', () => {
    it('returns false', () => {
      expect(isValidEmail('')).toBe(false);
    });
  });
});
