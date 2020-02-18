/**
 * Creates a new array that is flattened a single level deep.
 *
 * @param array - The array to flatten.
 *
 * @returns A new array flattened by a single level.
 */
export const flat = <T>(array: T[]) =>
  Array.isArray(array) ? array.flat() : []
