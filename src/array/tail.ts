/**
 * Creates an array containing all but the first element of an array.
 *
 * @param array - The array to get the tail of.
 *
 * @returns A new array containing the tail elements.
 */
export const tail = <T>(array: T[]) => {
  if (!Array.isArray(array)) return []

  const [, ...x] = array

  return x
}
