type FindCallback<T> = (currentElement: T, index: number, array: T[]) => boolean

/**
 * Finds the value of the first element in an array that satisfies the provided function.
 *
 * @param callback - Function invoked per element.
 * @param array - The array to iterate over.
 *
 * @returns The value or undefined if not found.
 */
export const find = <T>(callback: FindCallback<T>, array: T[]) =>
  Array.isArray(array) ? array.find(callback) : undefined
