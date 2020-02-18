/**
 * Gets a single random element from an array.
 *
 * @param array - The array to pull an element from.
 *
 * @returns The random element.
 */
export const sample = <T>(array: T[]) =>
  Array.isArray(array) && array.length !== 0
    ? array[Math.floor(Math.random() * array.length)]
    : undefined
