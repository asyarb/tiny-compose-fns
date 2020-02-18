/**
 * Gets the first element of an array.
 *
 * @param array - The array to query.
 *
 * @returns The first element of an array.
 */
export const first = <T>(array: T[]) =>
  Array.isArray(array) ? array[0] : undefined
