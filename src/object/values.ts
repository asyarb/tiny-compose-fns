import { isPlainObject } from '../utils/isPlainObject'

/**
 * Creates an array of the own enumerable property values of the provided object.
 *
 * @param object - The object whose values will be used.
 *
 * @returns An array of property names.
 */
export const values = (object: object) =>
  isPlainObject(object) ? Object.values(object) : []
