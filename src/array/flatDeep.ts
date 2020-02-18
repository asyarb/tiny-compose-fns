/**
 * Creates a new array that is flattened recursively until it is one level deep.
 *
 * @param array - The array to flatten.
 *
 * @returns A new array flattened to a single level.
 */
export const flatDeep = <T>(array: T[]) =>
  Array.isArray(array) ? array.flat(Infinity) : []
