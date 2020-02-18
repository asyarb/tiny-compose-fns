/**
 * Creates an array that is the reversed content of the provided array.
 *
 * @param array - The array to reverse.
 *
 * @returns A new array containing the reversed values.
 */
export const reverse = <T>(array: T[]) =>
  Array.isArray(array) ? array.map(i => i).reverse() : array
