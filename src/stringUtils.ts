/**
 * Converts a camelCase string to a human readable string.
 * @param str The camelCase string to convert.
 * @returns The human readable string.
 * @example 'helloWorld' => 'hello World'
 */
export function camelCaseToHumanReadable(str: string): string {
  // if the string is neither camelCase nor PascalCase, return the string as is
  if (!/[a-z][A-Z]/.test(str)) {
    return str;
  }

  // split the string into words at each capital letter
  const words = str.split(/(?=[A-Z])/);

  // if unable to split the string into words, return the string as is
  if (!words[0]) {
    return str;
  }

  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

/**
 * Converts a snake_case string to a human readable string.
 * @param str The snake_case string to convert.
 * @returns The human readable string.
 * @example 'hello_world' => 'Hello World'
 */
export function snakeCaseToHumanReadable(str: string): string {
  if (!str.includes('_')) {
    return str;
  }

  const words = str.replace(/_/g, ' ').split(' ');

  // if unable to split the string into words, return the string as is
  if (!words[0]) {
    return str;
  }

  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

/**
 * Converts a kebab-case string to a human readable string.
 * @param str The kebab-case string to convert.
 * @returns The human readable string.
 * @example 'hello-world' => 'Hello World'
 */
export function kebabCaseToHumanReadable(str: string): string {
  if (!str.includes('-')) {
    return str;
  }

  const words = str.replace(/-/g, ' ').split(' ');

  // if unable to split the string into words, return the string as is
  if (!words[0]) {
    return str;
  }

  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

/**
 * Converts a PascalCase string to a human readable string.
 * @param str The PascalCase string to convert.
 * @returns The human readable string.
 * @example 'HelloWorld' => 'Hello World'
 */
export function pascalCaseToHumanReadable(str: string): string {
  return camelCaseToHumanReadable(str);
}

/**
 * Capitalizes the first letter of a string.
 * @param str The string to capitalize.
 * @returns The capitalized string.
 * @example 'hello world' => 'Hello world'
 */
export function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new Error('str must be a string');
  }

  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}
