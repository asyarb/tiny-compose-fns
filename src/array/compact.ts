/**
 * Creates an array with all falsey values removed.
 *
 * @param array - The array to compact.
 *
 * @returns The new array of filtered values.
 */
export const compact = <T>(array: T[]) =>
  Array.isArray(array) ? array.filter(Boolean) : []
