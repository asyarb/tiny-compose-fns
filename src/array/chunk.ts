import { isNumber } from '../utils/isNumber'

/**
 * Creates an array of elements split into groups of the provided size.
 *
 * @param size - Length of each chunk.
 * @param array - The array to split.
 *
 * @returns An array containing chunked arrays. If array cannot be split evenly, the final chunk will be the remaining elements.
 */
export const chunk = <T>(size: number, array: T[]): T[][] => {
  if (!Array.isArray(array) || !isNumber(size)) return []

  return array.reduce((acc, curr, idx) => {
    if (idx % size === 0) return [...acc, [curr]]

    return [...acc.slice(0, -1), [...acc.slice(-1)[0], curr]]
  }, [] as T[][])
}
