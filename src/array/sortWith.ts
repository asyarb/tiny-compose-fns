/**
 * Sorts an array by the provided callback function.
 *
 * @param callback - Callback function to sort by.
 * @param array - The array to sort.
 *
 * @return A new array containing the sorted contents.
 */
export const sortWith = <T>(callback: (a: T, b: T) => number, array: T[]) =>
  Array.isArray(array) ? array.map(i => i).sort(callback) : []
