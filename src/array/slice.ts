/**
 * Creates a slice of an array from a specified start and end, exclusively.
 *
 * @param start - Start position.
 * @param end - End position.
 * @param array - The array to slice.
 *
 * @returns A new array containing the sliced contents.
 */
export const slice = <T>(start: number = 0, end: number = 0, array: T[]) =>
  Array.isArray(array) ? array.slice(start, end) : []
