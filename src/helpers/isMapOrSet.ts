import { getTag } from './getTag'

/**
 * Returns true if the provided value is an instance of `Map` or `Set`.
 * @private
 *
 * @param value - The value to check.
 *
 * @returns `true` if the object is an instance of `Map` or `Set`, `false` otherwise.
 */
export const isMapOrSet = (value: unknown) => {
  const tag = getTag(value)

  return tag === '[object Set]' || tag === '[object Map]'
}
