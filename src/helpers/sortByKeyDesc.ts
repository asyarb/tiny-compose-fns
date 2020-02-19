import { SortableObject } from '../types'

/**
 * Callback function for sorting by a key in descending order.
 * @private
 */
export const sortByKeyDesc = (key: string) => (
  a: SortableObject,
  b: SortableObject
) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0)
