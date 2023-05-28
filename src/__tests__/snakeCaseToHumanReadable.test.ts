import { snakeCaseToHumanReadable } from '../stringUtils';

describe('snakeCaseToHumanReadable', () => {
  describe('when given a snake_case string', () => {
    it('returns a human readable string', () => {
      expect(snakeCaseToHumanReadable('hello_world')).toBe('Hello World');
    });
  });

  describe('when given a camelCase string', () => {
    it('returns the string as is', () => {
      expect(snakeCaseToHumanReadable('helloWorld')).toBe('helloWorld');
    });
  });

  describe('when given a kebab-case string', () => {
    it('returns the string as is', () => {
      expect(snakeCaseToHumanReadable('hello-world')).toBe('hello-world');
    });
  });

  describe('when given a PascalCase string', () => {
    it('returns the string as is', () => {
      expect(snakeCaseToHumanReadable('HelloWorld')).toBe('HelloWorld');
    });
  });

  describe('when given a string with only underscores', () => {
    it('returns the string as is', () => {
      expect(snakeCaseToHumanReadable('__________')).toBe('__________');
    });
  });
});
