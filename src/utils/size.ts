import { isMapOrSet } from '../helpers/isMapOrSet'

/**
 * Returns the size of an iterable collection.
 *
 * @param object - The collection to check the size of.
 *
 * @returns The collection size.
 */
export const size = (obj: unknown = {}) => {
  if (isMapOrSet(obj)) return (obj as Set<number>).size
  if (obj !== null) return Object.keys(obj).length

  return 0
}
