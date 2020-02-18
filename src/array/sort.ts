/**
 * Sorts elements of an array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 *
 * @param array - The array to sort.
 *
 * @returns A new array containing the sorted contents.
 */
export const sort = <T>(array: T[]) =>
  Array.isArray(array) ? array.map(i => i).sort() : []
