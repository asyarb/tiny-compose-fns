import { isPlainObject } from '../utils/isPlainObject'

/**
 * Creates an array of enumerable string key-value pairs from the provided object.
 *
 * @param object - The object to convert.
 *
 * @returns The array of key-value pairs.
 */
export const entries = (object: object) =>
  isPlainObject(object) ? Object.entries(object) : []
