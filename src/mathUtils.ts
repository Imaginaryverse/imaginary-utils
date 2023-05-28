/**
 * Returns the percentage of a number
 * @param percent The percentage to get
 * @param total The total number
 * @returns The percentage of the total number
 * @example percentOf(50, 100) // 50
 * @example percentOf(25, 100) // 25
 */
export function percentOf(percent: number, total: number): number {
  if (
    percent < 0 ||
    percent === null ||
    percent === undefined ||
    Number.isNaN(percent)
  ) {
    throw new Error('percent must be a positive number');
  }

  if (total === null || total === undefined || Number.isNaN(total)) {
    throw new Error('total must be a number');
  }

  if (total < 0) {
    return -((percent / 100) * Math.abs(total));
  }

  return (percent / 100) * total;
}

/**
 * Returns the sum total of a numeric property in an array of objects
 * @param arr An array of objects
 * @param accessor A function that returns a number from an object
 * @returns The sum total of the numeric property
 */
export function sumOfProperty<T extends object>(
  arr: T[],
  accessor: (item: T) => number
): number {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array');
  }

  if (typeof accessor !== 'function') {
    throw new Error('accessor must be a function');
  }

  if (typeof accessor(arr[0]) !== 'number') {
    throw new Error('accessor must return a number');
  }

  return arr.reduce((acc, item) => acc + accessor(item), 0);
}
