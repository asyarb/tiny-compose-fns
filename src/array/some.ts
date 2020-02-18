type SomeCallback<T> = (currentElement: T, index: number, array: T[]) => boolean

/**
 * Checks if the provided callback returns truthy for any element of an array.
 *
 * @param callback - Function to run per element.
 * @param array - Array to iterate over.
 *
 * @returns true if any element passes the function condition, false otherwise.
 */
export const some = <T>(callback: SomeCallback<T>, array: T[]) =>
  Array.isArray(array) ? array.some(callback) : false
