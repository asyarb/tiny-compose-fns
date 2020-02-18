import { isMapOrSet } from '../helpers/isMapOrSet'
import { Collection } from '../types'

/**
 * Determines whether the provided value is an empty object, array, map, or set.
 *
 * @param value - The collection to check.
 *
 * @returns true if the provided collection is empty, false otherwise.
 */
export const isEmpty = <T>(value: Collection<T> | string) => {
  if (isMapOrSet(value)) return Boolean((value as Set<T>).size)

  return (
    // Unsure of how to resolve this.
    //@ts-ignore
    [Object, Array].includes((value || {}).constructor) &&
    !Object.entries(value || {}).length
  )
}
