import {
  DateFormat,
  DateNameFormat,
  FormatDateOptions,
  TimeFormat,
} from './types';

/**
 * Verifies that a date is valid
 * @param date The date to validate
 * @returns True if the date is valid, false otherwise
 */
export const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};

/**
 * Returns a date string in the given format
 * @param date The date to format
 * @param dateFormat The format to use
 * @returns A date string in the given format
 * @throws An error if the date is invalid
 */
export function getDateString(date: Date, dateFormat?: DateFormat): string {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0-indexed
  const day = date.getDate();

  switch (dateFormat) {
    case 'yy-MM-dd':
      return `${year.toString().slice(2)}-${month
        .toString()
        .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    case 'yy-M-d':
      return `${year.toString().slice(2)}-${month}-${day}`;

    case 'yyyy-MM-dd':
      return `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;

    case 'yyyy-M-d':
      return `${year}-${month}-${day}`;

    case 'MM-dd-yy':
      return `${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}-${year.toString().slice(2)}`;

    case 'M-d-yy':
      return `${month}-${day}-${year.toString().slice(2)}`;

    case 'MM-dd-yyyy':
      return `${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}-${year}`;

    case 'M-d-yyyy':
      return `${month}-${day}-${year}`;

    case 'dd-MM-yy':
      return `${day.toString().padStart(2, '0')}-${month
        .toString()
        .padStart(2, '0')}-${year.toString().slice(2)}`;

    case 'd-M-yy':
      return `${day}-${month}-${year.toString().slice(2)}`;

    case 'dd-MM-yyyy':
      return `${day.toString().padStart(2, '0')}-${month
        .toString()
        .padStart(2, '0')}-${year}`;

    case 'd-M-yyyy':
      return `${day}-${month}-${year}`;

    default:
      return `${year}-${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
  }
}

/**
 * Returns a time string in the given format
 * @param date The date to format
 * @param timeFormat The format to use
 * @returns A time string in the given format
 * @throws An error if the date is invalid
 */
export function getTimeString(date: Date, timeFormat?: TimeFormat): string {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  switch (timeFormat) {
    case 'hh:mm:ss':
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    case 'h:m:s':
      return `${hours}:${minutes}:${seconds}`;
    case 'hh:mm':
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;
    case 'h:m':
      return `${hours}:${minutes}`;
    default:
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

/**
 * Returns a date string in the given format. If includeTime is true, the time will be appended to the date string.
 * If the date is invalid, the placeholder will be returned (defaults to 'invalid date').
 * @param date The date to format
 * @param options The options to use
 * @returns A date string in the given format
 */
export function formatDate(
  date: Date,
  options: FormatDateOptions = {
    dateFormat: 'yyyy-MM-dd',
    timeFormat: 'hh:mm:ss',
    includeTime: false,
    placeholder: 'invalid date',
  }
): string {
  const { dateFormat, timeFormat, includeTime, placeholder } = options;
  if (!isValidDate(date)) {
    return placeholder || 'invalid date';
  }

  const dateString = getDateString(date, dateFormat);

  if (!includeTime) {
    return dateString;
  }

  const timeString = getTimeString(date, timeFormat);

  return `${dateString} ${timeString}`;
}

const shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const longDayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const shortMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const longMonthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Returns the name of the day of the week
 * @param date The date to get the day name from
 * @param format The format to use (short or long). Defaults to short.
 * @returns The name of the day of the week
 * @throws An error if the date is invalid
 */
export function getDayName(
  date: Date,
  format: DateNameFormat = 'short'
): string {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const day = date.getDay();

  return format === 'short' ? shortDayNames[day] : longDayNames[day];
}

/**
 * Returns the name of the month
 * @param date The date to get the month name from
 * @param format The format to use (short or long). Defaults to short.
 * @returns The name of the month
 * @throws An error if the date is invalid
 */
export function getMonthName(
  date: Date,
  format: DateNameFormat = 'short'
): string {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const month = date.getMonth();

  return format === 'short' ? shortMonthNames[month] : longMonthNames[month];
}

/**
 * Adds a given number of days to a date
 * @param date - The date to add days to
 * @param numDays - The number of days to add
 * @returns The date with the given number of days added
 * @throws An error if the date is invalid
 * @throws An error if the number of days is not an integer
 */
export function addDays(date: Date, numDays: number): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  if (typeof numDays !== 'number') {
    throw new Error('numDays must be a number');
  }

  if (!Number.isInteger(numDays)) {
    throw new Error('numDays must be an integer');
  }

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);

  return newDate;
}

/**
 * Adds a given number of months to a date
 * @param date - The date to add months to
 * @param numMonths - The number of months to add
 * @returns The date with the given number of months added
 * @throws An error if the date is invalid
 * @throws An error if the number of months is not an integer
 */
export function addMonths(date: Date, numMonths: number): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  if (typeof numMonths !== 'number') {
    throw new Error('numMonths must be a number');
  }

  if (!Number.isInteger(numMonths)) {
    throw new Error('numMonths must be an integer');
  }

  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + numMonths);

  return newDate;
}

/**
 * Adds a given number of years to a date
 * @param date - The date to add years to
 * @param numYears - The number of years to add
 * @returns The date with the given number of years added
 * @throws An error if the date is invalid
 * @throws An error if the number of years is not an integer
 */
export function addYears(date: Date, numYears: number): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  if (typeof numYears !== 'number') {
    throw new Error('numYears must be a number');
  }

  if (!Number.isInteger(numYears)) {
    throw new Error('numYears must be an integer');
  }

  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + numYears);

  return newDate;
}

/**
 * Returns the start of the hour for a given date
 * @param date - The date to get the start of the hour for
 * @returns The start of the hour for the given date
 * @throws An error if the date is invalid
 */
export function startOfHour(date: Date): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(date);
  newDate.setMinutes(0, 0, 0);

  return newDate;
}

/**
 * Returns the end of the hour for a given date
 * @param date - The date to get the end of the hour for
 * @returns The end of the hour for the given date
 * @throws An error if the date is invalid
 */
export function endOfHour(date: Date): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(date);
  newDate.setMinutes(59, 59, 999);

  return newDate;
}

/**
 * Returns the start of the day for a given date
 * @param date - The date to get the start of the day for
 * @returns The start of the day for the given date
 * @throws An error if the date is invalid
 */
export function startOfDay(date: Date): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);

  return newDate;
}

/**
 * Returns the end of the day for a given date
 * @param date - The date to get the end of the day for
 * @returns The end of the day for the given date
 * @throws An error if the date is invalid
 */
export function endOfDay(date: Date): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);

  return newDate;
}

/**
 * Returns the start of the month for a given date
 * @param date - The date to get the start of the month for
 * @returns The start of the month for the given date
 * @throws An error if the date is invalid
 */
export function startOfMonth(date: Date): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(date);
  newDate.setDate(1);
  newDate.setHours(0, 0, 0, 0);

  return newDate;
}

/**
 * Returns the end of the month for a given date
 * @param date - The date to get the end of the month for
 * @returns The end of the month for the given date
 * @throws An error if the date is invalid
 */
export function endOfMonth(date: Date): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  newDate.setDate(0);
  newDate.setHours(23, 59, 59, 999);

  return newDate;
}

/**
 * Returns the start of the year for a given date
 * @param date - The date to get the start of the year for
 * @returns The start of the year for the given date
 * @throws An error if the date is invalid
 */
export function startOfYear(date: Date): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(date);
  newDate.setMonth(0, 1);
  newDate.setHours(0, 0, 0, 0);

  return newDate;
}

/**
 * Returns the end of the year for a given date
 * @param date - The date to get the end of the year for
 * @returns The end of the year for the given date
 * @throws An error if the date is invalid
 */
export function endOfYear(date: Date): Date {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(date);
  newDate.setMonth(11, 31);
  newDate.setHours(23, 59, 59, 999);

  return newDate;
}

/**
 * Returns an array with each day in the month for a given date
 * @param date - The date to get the days of the month for
 * @returns An array with each day in the month for the given date
 * @throws An error if the date is invalid
 */
export function getDaysInMonth(date: Date): Date[] {
  if (!isValidDate(date)) {
    throw new Error('Invalid date');
  }

  const daysInMonth = [];
  const start = startOfMonth(date);
  const end = endOfMonth(date);

  let current = start;

  while (current <= end) {
    daysInMonth.push(current);
    current = addDays(current, 1);
  }

  return daysInMonth;
}
