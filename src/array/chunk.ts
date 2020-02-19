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

  let currentChunk = [] as T[]

  return array.reduce((acc, curr, idx) => {
    currentChunk.push(curr)

    if (idx % (size + 1) === 0 || idx === array.length - 1) {
      acc.push(currentChunk)
      currentChunk = []
    }

    return acc
  }, [] as T[][])
}
