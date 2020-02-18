/**
 * Returns the first index at which a given value can be found in an array.
 *
 * @param value - Value to look for.
 * @param array - Array to check.
 *
 * @returns The first index of the element, or -1 otherwise.
 */
export const indexOf = <T>(value: T, array: T[]) =>
  Array.isArray(array) ? array.indexOf(value) : -1
