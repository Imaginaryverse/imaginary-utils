import { formatNumber } from '../numberUtils';

describe('formatNumber', () => {
  describe('when given a number and no options', () => {
    it('returns a formatted number', () => {
      expect(formatNumber(1000)).toBe('1,000');
    });
  });

  describe('when given a number and integersOnly is true', () => {
    it('returns a formatted number', () => {
      expect(formatNumber(1000.01, { integersOnly: true })).toBe('1,000');
    });
  });

  describe('when given a number and minimumFractionDigits is 2', () => {
    it('returns a formatted number', () => {
      expect(formatNumber(1000, { minimumFractionDigits: 2 })).toBe('1,000.00');
    });
  });

  describe('when given a number and maximumFractionDigits is 0', () => {
    it('returns a formatted number', () => {
      expect(formatNumber(1000.01, { maximumFractionDigits: 0 })).toBe('1,000');
    });
  });

  describe('when given a number and minimumFractionDigits is 2 and maximumFractionDigits is 2', () => {
    it('returns a formatted number', () => {
      expect(
        formatNumber(1000, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      ).toBe('1,000.00');
    });
  });

  describe('when given a number and minimumFractionDigits is 2 and maximumFractionDigits is 0', () => {
    it('throws an error', () => {
      expect(() =>
        formatNumber(1000, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 0,
        })
      ).toThrowError();
    });
  });

  describe('when given a non-number', () => {
    it('throws an error', () => {
      expect(() => formatNumber('1000' as any)).toThrowError();
    });
  });

  describe('when given a non-number minimumFractionDigits', () => {
    it('throws an error', () => {
      expect(() =>
        formatNumber(1000, { minimumFractionDigits: '2' as any })
      ).toThrowError();
    });
  });

  describe('when given a non-number maximumFractionDigits', () => {
    it('throws an error', () => {
      expect(() =>
        formatNumber(1000, { maximumFractionDigits: '2' as any })
      ).toThrowError();
    });
  });

  describe('when given a non-boolean integersOnly', () => {
    it('throws an error', () => {
      expect(() =>
        formatNumber(1000, { integersOnly: 'true' as any })
      ).toThrowError();
    });
  });
});
