/**
 * Gets the last element of an array.
 *
 * @param array - The array to query.
 *
 * @returns The last element of the array.
 */
export const last = <T>(array: T[]) =>
  Array.isArray(array) ? array[array.length - 1] : undefined
