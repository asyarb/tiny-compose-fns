import { SortableObject } from '../types'

/**
 * Callback function for sorting by a key in ascending order.
 * @private
 */
export const sortByKeyAsec = (key: string) => (
  a: SortableObject,
  b: SortableObject
) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0)
