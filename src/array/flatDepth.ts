/**
 * Creates a new array that is flattened recursively by a specified depth.
 *
 * @param depth - The number of levels to recursively flatten.
 * @param array - The array to flatten.
 *
 * @returns A new array flattened by the specified amount.
 */
export const flatDepth = <T>(depth: number, array: T[]) =>
  Array.isArray(array) ? array.flat(depth) : []
