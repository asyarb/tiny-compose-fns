import { isMapOrSet } from './internal'

/**
 * Function that only returns undefined.
 *
 * @returns undefined
 */
export const noop = () => undefined

/**
 * Generates a unique ID. If prefix is given, the ID is appended to it.
 *
 * @param {string} prefix
 */
export const uniqueId = (() => {
  let num = 0

  return prefix => {
    prefix = prefix ? String(prefix) : ''
    num += 1
    return prefix + num
  }
})()

/**
 * Returns true if the provided object is empty.
 *
 * @param {Object} obj
 */
export const isEmpty = obj =>
  isMapOrSet(obj)
    ? !obj.size
    : [Object, Array].includes((obj || {}).constructor) &&
      !Object.entries(obj || {}).length

/**
 * Returns true if the provided value is null.
 *
 * @param {*} val
 */
export const isNull = val => val === null

/**
 * Returns true if the provided value is undefined.
 *
 * @param {*} val
 */
export const isUndefined = val => typeof val === 'undefined'

/**
 * Returns true if the provided value is a string.
 *
 * @param {*} val
 */
export const isString = val => typeof val === 'string'

/**
 * Returns true if the provided value is a number.
 *
 * @param {*} val
 */
export const isNumber = val => typeof val === 'number'

/**
 * Returns true if given value is an object.
 *
 * @param {*} val
 */
export const isPlainObject = val =>
  isMapOrSet(val)
    ? false
    : val !== null && typeof val === 'object' && !Array.isArray(val)

/**
 * Returns true if given value is a function.
 *
 * @param {*} val
 */
export const isFunction = val =>
  !!(val && val.constructor && val.call && val.apply)

/**
 * Returns true if given value is an array.
 *
 * @param {*} val
 */
export const isArray = val => Array.isArray(val)

/**
 * Returns a random number between the provided range
 *
 * @param {number} lower - lower bound of the random range
 * @param {number} upper - upper bound of the random range
 */
export const random = (lower, upper) => {
  if (!upper || typeof upper === 'boolean') {
    upper = lower
    lower = 0
  }

  let randomic = Math.random() * upper
  return randomic >= lower ? randomic : random(lower, upper)
}

/**
 * Returns the number of enumerable items in an array or object.
 *
 * @param {Object} obj
 */
export const size = (obj = {}) =>
  isMapOrSet(obj) ? obj.size : obj !== null ? Object.keys(obj).length : 0

/**
 * Returns a single promise when all promises in the iterable array have resolved, or rejects when a single iteratee rejects.
 *
 * @param {Array} arr
 */
export const allProm = async arr =>
  Array.isArray(arr) ? await Promise.all(arr) : []

/**
 * Returns a promise when the passed value has resolved.
 *
 * @param {Promise} val
 */
export const resolve = async val => await Promise.resolve(val)
