import { isPlainObject } from '../utils/isPlainObject'
import { Collection } from '../types'

/**
 * Converts `value` to an array.
 *
 * @param value - The value to convert.
 *
 * @returns The converted array.
 */
export const toArray = <T>(value: Collection): T[] =>
  isPlainObject(value)
    ? Array.from(Object.values(value))
    : value
    ? Array.from(value as [])
    : []
