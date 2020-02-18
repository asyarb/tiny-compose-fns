import { castArray } from './castArray'

/**
 * Creates an array of grouped elements. The first group contains the first elements of the two arrays, the second contains the second elements, and so on.
 *
 * @param arrOne - The first array.
 * @param arrTwo - The second array.
 *
 * @returns The new array of grouped elements.
 */
export const zip = <T1, T2>(arrOne: T1, arrTwo: T2) => {
  const a = castArray(arrOne)
  const b = castArray(arrTwo)

  const res = []
  const length = Math.max(a.length, b.length)

  for (let i = 0; i < length; i++) res[i] = [a[i], b[i]]

  return res
}
