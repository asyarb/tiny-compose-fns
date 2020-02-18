/**
 * Creates an array that is the shuffled content of the provided array.
 *
 * @param array - The array to shuffle.
 *
 * @returns A new array containing the shuffled contents.
 */
export const shuffle = <T>(array: T[]) =>
  Array.isArray(array) ? array.map(i => i).sort(() => Math.random() - 0.5) : []
