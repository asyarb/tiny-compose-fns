import { isPlainObject } from '../utils/isPlainObject'
import { get } from './get'

/**
 * Checks if the properties of two objects are equal.
 *
 * @param key - Property to check.
 * @param objectA - Object to check.
 * @param objectB - Second object to check.
 *
 * @returns true if the value at the specified key for both objects are equal, false otherwise.
 */
export const propsEq = (key: string, objectA: object, objectB: object) =>
  isPlainObject(objectA) && isPlainObject(objectB) && typeof key === 'string'
    ? get(key, objectA) === get(key, objectB)
    : false
