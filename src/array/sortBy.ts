import { sortByKeyAsec } from '../helpers/sortByKeyAsec'

/**
 * Sorts an array of objects by a provided key in ascending order.
 *
 * @param key - Object key to sort by.
 * @param array - The array to sort.
 *
 * @returns A new array containing the sorted contents.
 */
export const sortBy = <T>(key: string, array: T[]) =>
  Array.isArray(array) ? array.map(i => i).sort(sortByKeyAsec(key)) : []
