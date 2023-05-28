import { pascalCaseToHumanReadable } from '../stringUtils';

describe('pascalCaseToHumanReadable', () => {
  describe('when given a PascalCase string', () => {
    it('returns a human readable string', () => {
      expect(pascalCaseToHumanReadable('HelloWorld')).toBe('Hello World');
    });
  });

  describe('when given a camelCase string', () => {
    it('returns a human readable string', () => {
      expect(pascalCaseToHumanReadable('helloWorld')).toBe('Hello World');
    });
  });

  describe('when given a snake_case string', () => {
    it('returns the string as is', () => {
      expect(pascalCaseToHumanReadable('hello_world')).toBe('hello_world');
    });
  });

  describe('when given a kebab-case string', () => {
    it('returns the string as is', () => {
      expect(pascalCaseToHumanReadable('hello-world')).toBe('hello-world');
    });
  });

  describe('when given a string with multiple capital letters in a row', () => {
    it('returns a human readable string', () => {
      expect(pascalCaseToHumanReadable('helloWORLD')).toBe('Hello W O R L D');
    });
  });

  describe('when given a string with only special characters', () => {
    it('returns the string as is', () => {
      expect(pascalCaseToHumanReadable('!@#$%^&*()_+')).toBe('!@#$%^&*()_+');
    });
  });

  describe('when given a string with only numbers', () => {
    it('returns the string as is', () => {
      expect(pascalCaseToHumanReadable('1234567890')).toBe('1234567890');
    });
  });
});
