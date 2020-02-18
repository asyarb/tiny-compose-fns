import { isPlainObject } from '../utils/isPlainObject'

/**
 * Creates an array of the own enumerable property names of the provided object.
 *
 * @param object - The object whose keys will be used.
 *
 * @returns An array of property names.
 */
export const keys = (object: object) =>
  isPlainObject(object) ? Object.keys(object) : []
