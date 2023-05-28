import { SerializeSearchParamsOptions } from './types';

/**
 * Serializes an object of search params into a string.
 * @param searchParams The search params to serialize
 * @param options The options for serializing the search params
 * @returns The serialized search params
 * @throws An error if searchParams is not an object
 */
export function serializeSearchParams(
  searchParams: Record<string, any>,
  options: SerializeSearchParamsOptions = {}
): string {
  if (typeof searchParams !== 'object') {
    throw new Error('searchParams must be an object');
  }

  const { excludeFalsyTypes = [null, undefined] } = options;

  return Object.entries(searchParams)
    .filter(([, value]) => !excludeFalsyTypes.includes(value))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
