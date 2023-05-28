import { msToTime } from '../numberUtils';

describe('msToTime', () => {
  describe('when given a valid number', () => {
    it('returns the hours, minutes, and seconds', () => {
      const zero = 0;
      const oneSecond = 1000;
      const oneMinute = 1000 * 60;
      const oneHour = 1000 * 60 * 60;
      const oneDay = 1000 * 60 * 60 * 24;
      const oneMonth = 1000 * 60 * 60 * 24 * 30;
      const oneYear = 1000 * 60 * 60 * 24 * 365;

      expect(msToTime(zero)).toEqual({
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

      expect(msToTime(oneSecond)).toEqual({
        hours: 0,
        minutes: 0,
        seconds: 1,
      });

      expect(msToTime(oneMinute)).toEqual({
        hours: 0,
        minutes: 1,
        seconds: 0,
      });

      expect(msToTime(oneHour)).toEqual({
        hours: 1,
        minutes: 0,
        seconds: 0,
      });

      expect(msToTime(oneDay)).toEqual({
        hours: 24,
        minutes: 0,
        seconds: 0,
      });

      expect(msToTime(oneMonth)).toEqual({
        hours: 720,
        minutes: 0,
        seconds: 0,
      });

      expect(msToTime(oneYear)).toEqual({
        hours: 8760,
        minutes: 0,
        seconds: 0,
      });
    });
  });

  describe('when given an invalid number', () => {
    it('throws an error', () => {
      expect(() => msToTime('' as any)).toThrow('ms must be a number');
    });
  });
});
