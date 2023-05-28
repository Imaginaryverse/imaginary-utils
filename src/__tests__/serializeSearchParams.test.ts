import { serializeSearchParams } from '../objectUtils';

const searchParams = {
  name: 'John',
  age: 30,
  isEmployed: true,
  favoriteColor: 'blue',
  favoriteFood: 'pizza',
};

const falsySearchParams = {
  name: '',
  age: 0,
  isEmployed: false,
  favoriteColor: null,
  favoriteFood: undefined,
};

describe('serializeSearchParams', () => {
  describe('when given a valid search params object', () => {
    it('returns the serialized search params', () => {
      expect(serializeSearchParams(searchParams)).toBe(
        'name=John&age=30&isEmployed=true&favoriteColor=blue&favoriteFood=pizza'
      );
    });
  });

  describe('when given a valid search params object with falsy values', () => {
    it('returns the serialized search params with null and undefined key-value pairs removed', () => {
      expect(serializeSearchParams(falsySearchParams)).toBe(
        'name=&age=0&isEmployed=false'
      );
    });
  });

  describe('when given a valid search params object with falsy values and a custom excludeFalsyTypes option', () => {
    it('returns the serialized search params with the custom falsy types removed', () => {
      expect(
        serializeSearchParams(falsySearchParams, {
          excludeFalsyTypes: ['', 0, false, undefined, null],
        })
      ).toBe('');
    });
  });

  describe('when given an invalid search params object', () => {
    it('throws an error', () => {
      expect(() => serializeSearchParams('' as any)).toThrow(
        'searchParams must be an object'
      );
    });
  });
});
