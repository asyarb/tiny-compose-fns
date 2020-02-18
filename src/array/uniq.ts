/**
 * Removes duplicates from `array`.
 *
 * @param array - The array to remove duplicates from.
 *
 * @returns The new duplicate free array.
 */
export const uniq = <T>(array: T[]) =>
  Array.isArray(array) ? [...new Set(array)] : []
