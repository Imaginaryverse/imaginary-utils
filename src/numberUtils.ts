import { FormatNumberOptions } from './types';

/**
 * Formats a number
 * @param num The number to format
 * @param options The options to use when formatting
 * @returns The formatted number
 * @example formatNumber(1000) // 1,000
 */
export function formatNumber(
  num: number,
  options: FormatNumberOptions = {}
): string {
  const {
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    integersOnly = false,
  } = options;

  if (typeof num !== 'number') {
    throw new Error('num must be a number');
  }

  if (typeof minimumFractionDigits !== 'number') {
    throw new Error('minimumFractionDigits must be a number');
  }

  if (typeof maximumFractionDigits !== 'number') {
    throw new Error('maximumFractionDigits must be a number');
  }

  if (typeof integersOnly !== 'boolean') {
    throw new Error('integersOnly must be a boolean');
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return integersOnly
    ? formatter.format(Math.round(num))
    : formatter.format(num);
}

/**
 * Converts milliseconds to hours, minutes, and seconds
 * @param ms The milliseconds to convert
 * @returns The hours, minutes, and seconds
 * @throws An error if ms is not a number
 */

export function msToTime(ms: number): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  if (typeof ms !== 'number') {
    throw new Error('ms must be a number');
  }

  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return {
    hours,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}
