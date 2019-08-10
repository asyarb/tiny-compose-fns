import { isPlainObject } from './utils'

/**
 * Safely retrieves nested keys in an object
 *
 * @param {string} key
 * @param {Object} obj
 */
export const get = (key, obj, def, p, undef) => {
  key = key.split ? key.split('.') : key

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }

  return obj === undef ? def : obj
}

/**
 * Returns true if an object has a specified key
 *
 * @param {string} key
 * @param {Object} obj
 */
export const has = (key, obj) => Boolean(get(key, obj))

/**
 * Returns an object compose from key-value pairs.
 *
 * @param {Array} arr
 */
export const fromEntries = arr =>
  Array.isArray(arr) ? Object.fromEntries(arr) : {}

/**
 * Returns an array of key-value pairs from an object.
 *
 * @param {Object} obj
 */
export const entries = obj => (isPlainObject(obj) ? Object.entries(obj) : [])

/**
 * Returns an array of the objects own enumerable properties.
 *
 * @param {Object} obj
 */
export const keys = obj => (isPlainObject(obj) ? Object.keys(obj) : [])

/**
 * Returns an array of the objects own enumerable values.
 *
 * @param {Object} obj
 */
export const values = obj => (isPlainObject(obj) ? Object.values(obj) : [])

/**
 * Shallowly merges two objects together.
 *
 * @param {Object} target
 * @param {Object} sources
 */
export const merge = (target, ...sources) => {
  const targetSrc = Object.assign({}, target)
  return Object.assign(targetSrc, ...sources)
}

/**
 * Recursively merges objects together.
 *
 * @param {Object} target
 * @param {Object} source
 */
export const mergeDeep = (target, source) => {
  let output = Object.assign({}, target)

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (isPlainObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] })
        else output[key] = mergeDeep(target[key], source[key])
      } else {
        Object.assign(output, { [key]: source[key] })
      }
    })
  }

  return output
}

/**
 * Returns true if the properties of two objects are equal, false otherwise.
 *
 * @param {string} key
 * @param {Object} a
 * @param {Object} b
 */
export const propsEq = (key, a, b) =>
  isPlainObject(a) && isPlainObject(b) && typeof key === 'string'
    ? get(key, a) === get(key, b)
    : false
