/**
 * Date format options
 * @example 'yy-MM-dd' => '20-01-01'
 * @example 'yy-M-d' => '20-1-1'
 * @example 'yyyy-MM-dd' => '2020-01-01'
 * @example 'yyyy-M-d' => '2020-1-1'
 * @example 'MM-dd-yy' => '01-01-20'
 * @example 'M-d-yy' => '1-1-20'
 * @example 'MM-dd-yyyy' => '01-01-2020'
 * @example 'M-d-yyyy' => '1-1-2020'
 * @example 'dd-MM-yy' => '01-01-20'
 * @example 'd-M-yy' => '1-1-20'
 * @example 'dd-MM-yyyy' => '01-01-2020'
 * @example 'd-M-yyyy' => '1-1-2020'
 */
export type DateFormat =
  | 'yy-MM-dd' // eg. 20-01-01
  | 'yy-M-d' // eg. 20-1-1
  | 'yyyy-MM-dd' // eg. 2020-01-01
  | 'yyyy-M-d' // eg. 2020-1-1
  | 'MM-dd-yy' // eg. 01-01-20
  | 'M-d-yy' // eg. 1-1-20
  | 'MM-dd-yyyy' // eg. 01-01-2020
  | 'M-d-yyyy' // eg. 1-1-2020
  | 'dd-MM-yy' // eg. 01-01-20
  | 'd-M-yy' // eg. 1-1-20
  | 'dd-MM-yyyy' // eg. 01-01-2020
  | 'd-M-yyyy'; // eg. 1-1-2020

/**
 * Time format options
 * @example 'hh:mm:ss' => '01:01:01'
 * @example 'h:m:s' => '1:1:1'
 * @example 'hh:mm' => '01:01'
 * @example 'h:m' => '1:1'
 */
export type TimeFormat =
  | 'hh:mm:ss' // eg. 01:01:01
  | 'h:m:s' // eg. 1:1:1
  | 'hh:mm' // eg. 01:01
  | 'h:m'; // eg. 1:1

export interface FormatDateOptions {
  /**
   * The date format to use. Defaults to 'yyyy-MM-dd'
   */
  dateFormat?: DateFormat; // default: 'yyyy-MM-dd'
  /**
   * The time format to use
   */
  timeFormat?: TimeFormat; // default: 'hh:mm:ss'
  /**
   * Whether or not to include the time in the output
   */
  includeTime?: boolean; // default: false
  /**
   * The string to use when the date is invalid
   */
  placeholder?: string; // default: 'invalid date'
}

export type DateNameFormat = 'short' | 'long';
