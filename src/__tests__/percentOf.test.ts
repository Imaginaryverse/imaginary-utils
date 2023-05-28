import { percentOf } from '../mathUtils';

describe('percentOf', () => {
  describe('when percent is 50 and total is 100', () => {
    it('returns 50', () => {
      expect(percentOf(50, 100)).toBe(50);
    });
  });

  describe('when percent is 25 and total is 100', () => {
    it('returns 25', () => {
      expect(percentOf(25, 100)).toBe(25);
    });
  });

  describe('when percent is 50 and total is 0', () => {
    it('returns 0', () => {
      expect(percentOf(50, 0)).toBe(0);
    });
  });

  describe('when percent is 0 and total is 100', () => {
    it('returns 0', () => {
      expect(percentOf(0, 100)).toBe(0);
    });
  });

  describe('when percent is 0 and total is 0', () => {
    it('returns 0', () => {
      expect(percentOf(0, 0)).toBe(0);
    });
  });

  describe('when percent is 100 and total is 100', () => {
    it('returns 100', () => {
      expect(percentOf(100, 100)).toBe(100);
    });
  });

  describe('when given a negative total', () => {
    it('returns a negative number', () => {
      expect(percentOf(50, -100)).toBe(-50);
    });
  });

  describe('when given a negative percent', () => {
    it('throws an error', () => {
      expect(() => {
        percentOf(-1, 100);
      }).toThrow('percent must be a positive number');
    });
  });

  describe('when percent is null', () => {
    it('throws an error', () => {
      expect(() => {
        percentOf(null as any, 100);
      }).toThrow('percent must be a positive number');
    });
  });

  describe('when percent is undefined', () => {
    it('throws an error', () => {
      expect(() => {
        percentOf(undefined as any, 100);
      }).toThrow('percent must be a positive number');
    });
  });

  describe('when total is null', () => {
    it('throws an error', () => {
      expect(() => {
        percentOf(50, null as any);
      }).toThrow('total must be a number');
    });
  });

  describe('when total is undefined', () => {
    it('throws an error', () => {
      expect(() => {
        percentOf(50, undefined as any);
      }).toThrow('total must be a number');
    });
  });
});
