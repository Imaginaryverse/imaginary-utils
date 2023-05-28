export function sortByProperty<T extends object>(
  arr: T[],
  accessor: (item: T) => string | number | Date,
  direction: 'asc' | 'desc'
): T[] {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array');
  }
  if (typeof accessor !== 'function') {
    throw new Error('accessor must be a function');
  }

  if (
    typeof accessor(arr[0]) !== 'string' &&
    typeof accessor(arr[0]) !== 'number' &&
    !(accessor(arr[0]) instanceof Date)
  ) {
    throw new Error('accessor must return a string, number, or Date');
  }

  return arr.sort((a, b) => {
    const aVal = accessor(a);
    const bVal = accessor(b);
    if (direction === 'asc') {
      if (aVal < bVal) {
        return -1;
      }
      if (aVal > bVal) {
        return 1;
      }
      return 0;
    } else {
      if (aVal > bVal) {
        return -1;
      }
      if (aVal < bVal) {
        return 1;
      }
      return 0;
    }
  });
}
