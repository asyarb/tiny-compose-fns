import { Collection } from '../types'

/**
 * Transforms a list of key-value pairs into an object.
 *
 * @param entries - Key-value pairs to process.
 *
 * @returns A new object whose properties are given by the entries of the array.
 */
export const fromEntries = (entries: Collection) =>
  Array.isArray(entries) ? Object.fromEntries(entries) : {}
