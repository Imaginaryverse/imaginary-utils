import { sumOfProperty } from '../mathUtils';

const persons = [
  { name: 'John', age: 40 },
  { name: 'Jane', age: 35 },
  { name: 'Jack', age: 15 },
  { name: 'Jill', age: 10 },
];

describe('sumOfProperty', () => {
  describe('when given an array of objects and an accessor function', () => {
    it('returns the sum total of the numeric property', () => {
      expect(sumOfProperty(persons, person => person.age)).toBe(100);
    });
  });

  describe('when given a non-array', () => {
    it('throws an error', () => {
      expect(() => {
        sumOfProperty(null as any, () => 0);
      }).toThrow('arr must be an array');
    });
  });

  describe('when given a non-function accessor', () => {
    it('throws an error', () => {
      expect(() => {
        sumOfProperty([], null as any);
      }).toThrow('accessor must be a function');
    });
  });

  describe('when accessor does not return a number', () => {
    it('throws an error', () => {
      expect(() => {
        sumOfProperty([], () => 'hello' as any);
      }).toThrow('accessor must return a number');
    });
  });
});
