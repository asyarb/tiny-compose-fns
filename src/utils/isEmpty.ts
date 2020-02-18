import { isMapOrSet } from '../helpers/isMapOrSet'
import { Collection } from '../types'

/**
 * Determines whether the provided value is an empty object, array, map, or set.
 *
 * @param value - The collection to check.
 *
 * @returns true if the provided collection is empty, false otherwise.
 */
export const isEmpty = (value: Collection) => {
  if (isMapOrSet(value)) return Boolean((value as Set<unknown>).size)

  return (
    [Object, Array].includes((value || {}).constructor as any) &&
    !Object.entries(value || {}).length
  )
}
