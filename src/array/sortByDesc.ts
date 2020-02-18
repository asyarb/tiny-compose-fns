import { sortByKeyDesc } from '../helpers/sortByKeyDesc'

/**
 * Sorts an array of objects by a provided key in descending order.
 *
 * @param key - Object key to sort by.
 * @param array - The array to sort.
 *
 * @returns A new array containing the sorted contents.
 */
export const sortByDesc = <T>(key: string, array: T[]) =>
  Array.isArray(array) ? array.map(i => i).sort(sortByKeyDesc(key)) : []
