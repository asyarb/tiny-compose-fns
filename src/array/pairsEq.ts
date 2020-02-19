import { zipWith } from './zipWith'

/**
 * Returns an array containing boolean values of whether a given set of arrays have strict equality pairs.
 *
 * @param pairs - The first set of pairs.
 * @param pairsTwo - The second set of pairs
 *
 * @returns An array containing the boolean values.
 */
export const pairsEq = <T>(pairsA: T[] | T, pairsB: T[] | T) =>
  zipWith((itemA: T, itemB: T) => itemA === itemB, pairsA as T[], pairsB as T[])
