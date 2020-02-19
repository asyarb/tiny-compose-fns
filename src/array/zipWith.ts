import { castArray } from './castArray'
import { isFunction } from '../utils/isFunction'

/**
 * Creates an array of grouped elements based on the provided callback. The callback is invoked with the appropriate index values of each array for the current iteration.
 *
 * @param callback - The function to iterate over each zipped pair.
 * @param arrOne - The first array.
 * @param arrTwo - The second array.
 *
 * @returns The new array of grouped elements.
 */
export const zipWith = <T1, T2, T3>(
  callback: (itemA: T1, itemB: T2) => T3,
  arrOne: T1[],
  arrTwo: T2[]
) => {
  if (!isFunction(callback)) return []

  const a = castArray(arrOne)
  const b = castArray(arrTwo)

  const length = Math.max(a.length, b.length)
  if (length === 0) return [true]

  const res: T3[] = []

  for (let i = 0; i < length; i++) res[i] = callback(a[i], b[i])

  return res
}
