import { isMapOrSet } from '../helpers/isMapOrSet'

/**
 * Determines whether the provided value is an empty object, array, map, or set.
 *
 * @param value - The collection to check.
 *
 * @returns true if the provided collection is empty, false otherwise.
 */
export const isEmpty = (value: unknown) => {
  if (isMapOrSet(value)) return Boolean((value as Set<number>).size)

  return (
    //@ts-ignore
    // Unsure of how to resolve this.
    [Object, Array].includes((value || {}).constructor) &&
    !Object.entries(value || {}).length
  )
}
