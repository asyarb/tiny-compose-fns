/**
 * Returns the last index of the provided value in an array.
 *
 * @param value - The value to search for.
 * @param array - The array to search.
 *
 * @returns The index of the matched value, else -1.
 */
export const lastIndexOf = <T>(value: T, array: T[]) =>
  Array.isArray(array) ? array.lastIndexOf(value) : -1
