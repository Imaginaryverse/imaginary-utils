import { kebabCaseToHumanReadable } from '../stringUtils';

describe('kebabCaseToHumanReadable', () => {
  describe('when given a kebab-case string', () => {
    it('returns a human readable string', () => {
      expect(kebabCaseToHumanReadable('hello-world')).toBe('Hello World');
    });
  });

  describe('when given a camelCase string', () => {
    it('returns the string as is', () => {
      expect(kebabCaseToHumanReadable('helloWorld')).toBe('helloWorld');
    });
  });

  describe('when given a snake_case string', () => {
    it('returns the string as is', () => {
      expect(kebabCaseToHumanReadable('hello_world')).toBe('hello_world');
    });
  });

  describe('when given a PascalCase string', () => {
    it('returns the string as is', () => {
      expect(kebabCaseToHumanReadable('HelloWorld')).toBe('HelloWorld');
    });
  });

  describe('when given a string with only dashes', () => {
    it('returns the string as is', () => {
      expect(kebabCaseToHumanReadable('----------')).toBe('----------');
    });
  });
});
