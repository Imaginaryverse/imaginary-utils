import { sortByProperty } from '../arrayUtils';

const array = [
  { name: 'John', id: 1, birthdate: new Date(1990, 0, 1) },
  { name: 'Jane', id: 2, birthdate: new Date(1995, 0, 1) },
  { name: 'Joe', id: 3, birthdate: new Date(1993, 0, 1) },
];

describe('sortByProperty', () => {
  describe("when given an array of objects, an accessor function, and a direction of 'asc'", () => {
    it('returns a sorted array', () => {
      expect(sortByProperty(array, item => item.name, 'asc')).toMatchSnapshot();
      expect(sortByProperty(array, item => item.id, 'asc')).toMatchSnapshot();
      expect(
        sortByProperty(array, item => item.birthdate, 'asc')
      ).toMatchSnapshot();
    });
  });

  describe("when given an array of objects, an accessor function, and a direction of 'desc'", () => {
    it('returns a sorted array', () => {
      expect(
        sortByProperty(array, item => item.name, 'desc')
      ).toMatchSnapshot();
      expect(sortByProperty(array, item => item.id, 'desc')).toMatchSnapshot();
      expect(
        sortByProperty(array, item => item.birthdate, 'desc')
      ).toMatchSnapshot();
    });
  });

  describe('when given an invalid array', () => {
    it('throws an error', () => {
      expect(() =>
        sortByProperty(null as any, item => item as any, 'asc')
      ).toThrow('arr must be an array');
    });
  });

  describe('when given an invalid accessor', () => {
    it('throws an error', () => {
      expect(() => sortByProperty(array, null as any, 'asc')).toThrow(
        'accessor must be a function'
      );
    });
  });

  describe('when given an accessor that returns an invalid type', () => {
    it('throws an error', () => {
      expect(() => sortByProperty(array, item => item as any, 'asc')).toThrow(
        'accessor must return a string, number, or Date'
      );
    });
  });
});
