import { isMapOrSet } from '../helpers/isMapOrSet'

/**
 * Determines whether the passed object is a plain object.
 *
 * @param value - The value to check.
 *
 * @returns true if value is a plain object, false otherwise.
 */
export const isPlainObject = (value: unknown) =>
  isMapOrSet(value)
    ? false
    : value !== null && typeof value === 'object' && !Array.isArray(value)
