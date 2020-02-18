/**
 * Determines whether an array includes a certain value among its values.
 *
 * @param value - The value to check for.
 * @param array - The array to check.
 *
 * @returns true if value is in array, false otherwise.
 */
export const includes = <T>(value: T, array: T[]) =>
  Array.isArray(array) ? array.includes(value) : false
