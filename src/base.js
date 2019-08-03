// INTERNAL HELPERS

/**
 * Get the string tag of a value.
 * @private
 *
 * @param {*} val
 */
const getTag = val => toString.call(val)

/**
 * Returns true if given value is an instance of Map or Set.
 * @private
 *
 * @param {*} obj
 */
const isMapOrSet = obj => {
  const tag = getTag(obj)
  return tag === '[object Set]' || tag === '[object Map]'
}

// UTILS

/**
 * Function that only returns undefined.
 */
export const noop = () => undefined

/**
 * Invokes the provided function num times, returning an array of the results of each invocation. Function is provided the index as an argument.
 *
 * @param {Function} fn
 * @param {number} num
 */
export const times = (fn, num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    arr[i] = fn(i)
  }

  return arr
}

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
 * Casts provided value as an array if it is not one
 *
 * @param {Array} val
 */
export function castArray(val) {
  if (!arguments.length) return []

  return Array.isArray(val) ? val : [val]
}

// ARRAY FNS
/**
 * Converts provided value to an array.
 *
 * @param {Array} val
 */
export const toArray = val =>
  isPlainObject(val)
    ? Array.from(Object.values(val))
    : val
    ? Array.from(val)
    : []

/**
 * Reduces array to a value which is the accumulated result of running each element in collection through the provided function. Each invocation of the function is provided the return value of the previous iterations.
 *
 * @param {Function} fn
 * @param {Array} arr
 */
export const reduce = (fn, initialValue, arr) =>
  !isFunction(fn)
    ? [].reduce(fn)
    : Array.isArray(arr)
    ? arr.reduce(fn)
    : initialValue

/**
 * Returns a new array based on the result of the passed function.
 *
 * @param {Function} fn
 * @param {Array} arr
 *
 * @returns a new array with modified values based on the iteratee.
 */
export const map = (fn, arr) =>
  !isFunction(fn) ? [].map(fn) : Array.isArray(arr) ? arr.map(fn) : []

/**
 * Returns a new array composed of values that return true from the passed function.
 *
 * @param {Function} fn - iteratee to run on every element
 * @param {Array} arr
 *
 * @return new array with filtered values based on the iteratee
 */
export const filter = (fn, arr) =>
  !isFunction(fn) ? [].filter(fn) : Array.isArray(arr) ? arr.filter(fn) : []

/**
 * Runs a function for every element in the passed array.
 *
 * @param {Function} fn
 * @param {Array} arr
 *
 */
export const forEach = (fn, arr) =>
  !isFunction(fn) ? [].forEach(fn) : Array.isArray(arr) && arr.forEach(fn)

/**
 * Returns a string with the specified separator delimiting a provided array.
 *
 * @param {string} sep
 * @param {Array} arr
 */
export const join = (sep, arr) => (Array.isArray(arr) ? arr.join(sep) : '')

/**
 * Returns the first element of an array.
 *
 * @param {Array} arr - Array to extract the first element from.
 */
export const first = arr => (Array.isArray(arr) ? arr[0] : undefined)

/**
 * Returns the last element of an array.
 *
 * @param {Array} arr - Array to extract the last element from.
 */
export const last = arr =>
  Array.isArray(arr) ? arr[arr.length - 1] : undefined

/**
 * Returns all but the first element of an array.
 *
 * @param {Array} arr - Array to extract values from.
 */
export const tail = arr => {
  if (!Array.isArray(arr)) return []
  const [, ...x] = arr

  return x
}

/**
 * Creates a sliced copy of an array with a specified number of elements taken from the beginning.
 *
 * @param {number} num
 * @param {Array} arr
 */
export const take = (num = 1, arr) =>
  Array.isArray(arr) ? arr.slice(0, num === null ? 1 : num < 0 ? 0 : num) : []

/**
 * Creates an array of elements split into groups the length of size.
 *
 * @param {number} size - size of groups to split
 * @param {Array} arr - arr to split
 */
export const chunk = (size, arr) =>
  Array.isArray(arr) && isNumber(size)
    ? arr.reduce(
        (array, item, idx) =>
          idx % size === 0
            ? [...array, [item]]
            : [...array.slice(0, -1), [...array.slice(-1)[0], item]],
        []
      )
    : []

/**
 * Creates an array with all falsy values removed.
 *
 * @param {Array} arr
 */
export const compact = arr => (Array.isArray(arr) ? arr.filter(Boolean) : [])

/**
 * Creates a new array concatenating the provided array with any additional arrays and/or values.
 *
 * @param {Array} arr
 * @param {Array} vals
 */
export const concat = (arr, vals) =>
  Array.isArray(arr) ? [...arr, ...castArray(vals)] : [arr]

/**
 * Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
 *
 * @param {Function} fn
 * @param {Array} arr
 */
export const find = (fn, arr) => (Array.isArray(arr) ? arr.find(fn) : undefined)

/**
 * Tests whether any of the elements in the array pass the test implemented by the provided function.
 *
 * @param {Function} fn
 * @param {Array} arr
 */
export const some = (fn, arr) => (Array.isArray(arr) ? arr.some(fn) : false)

/**
 * Flattens an array a single level deep.
 *
 * @param {Array} arr
 */
export const flat = arr => (Array.isArray(arr) ? arr.flat() : [])

/**
 * Flattens an array a specfied number of levels.
 *
 * @param {*} arr
 */
export const flatDepth = (num, arr) => (Array.isArray(arr) ? arr.flat(num) : [])

/**
 * Recursively flattens an array to a single level.
 *
 * @param {Array} arr
 */
export const flatDeep = arr => (Array.isArray(arr) ? arr.flat(Infinity) : [])

/**
 * Flattens an array a single level deep and maps over that array.
 *
 * @param {*} fn
 * @param {Array} arr
 */
export const flatMap = (fn, arr) => (Array.isArray(arr) ? arr.flatMap(fn) : [])

/**
 * Reverses the values in an array.
 *
 * @param {Array} arr
 */
export const reverse = arr =>
  Array.isArray(arr) ? arr.map(i => i).reverse() : arr

/**
 * Returns a copy of an array by removing or replacing exisiting elements or adding new elements in place.
 *
 * @param {number} start
 * @param {number} deleteCount
 * @param {*} item
 * @param {Array} arr
 */
export const splice = (start, deleteCount, item, arr) => {
  if (!Array.isArray(arr)) return []

  const copy = arr.map(i => i)
  copy.splice(start, deleteCount, item)

  return copy
}

/**
 * Copies portion of array into a new object based on provided parameters.
 *
 * @param {number} start
 * @param {number} end
 * @param {Array} arr
 */
export const slice = (start = 0, end = 0, arr) =>
  Array.isArray(arr) ? arr.slice(start, end) : []

/**
 * Checks for a value is in the array.
 *
 * @param {*} val
 * @param {Array} arr
 *
 */
export const includes = (val, arr) =>
  Array.isArray(arr) ? arr.includes(val) : false

/**
 * Sorts an array.
 *
 * @param {Array} arr
 */

export const sort = arr => (Array.isArray(arr) ? arr.map(i => i).sort() : [])

/**
 * Sorts an array based on an object key or custom comparator function.
 *
 * @param {string} keyOrFn
 */
const sortByWith = key => (a, b) =>
  a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
export const sortBy = (keyOrFn, arr) =>
  Array.isArray(arr)
    ? arr.map(i => i).sort(isFunction(keyOrFn) ? keyOrFn : sortByWith(keyOrFn))
    : []

/**
 * Produces a duplicate-free version of an array.
 *
 * @param {Array} arr
 */
export const uniq = arr => (Array.isArray(arr) ? [...new Set(arr)] : [])

/**
 * Returns a new array with shuffled values of the provided array.
 *
 * @param {Array} arr
 */
export const shuffle = arr =>
  Array.isArray(arr) ? arr.map(i => i).sort(() => Math.random() - 0.5) : []

/**
 * Returns the index of the provided value
 *
 * @param {*} val
 * @param {Array} arr
 *
 * @returns first index of the element in the array, -1 if not found.
 */
export const indexOf = (val, arr) =>
  Array.isArray(arr) ? arr.indexOf(val) : -1

/**
 * Returns the last index of the provided value
 *
 * @param {*} val
 * @param {Array} arr
 *
 * @returns last index of the element in the array, -1 if not found.
 */
export const lastIndexOf = (val, arr) =>
  Array.isArray(arr) ? arr.lastIndexOf(val) : -1

/**
 * Computes the maximum value of array. If array is empty or falsey, undefined is returned.
 *
 * @param {Array} arr
 */
export const max = arr =>
  Array.isArray(arr) && arr.length !== 0 ? Math.max(...arr) : undefined

/**
 * Computes the minimum value of array. If array is empty or falsey, undefined is returned.
 *
 * @param {Array} arr
 */
export const min = arr =>
  Array.isArray(arr) && arr.length !== 0 ? Math.min(...arr) : undefined

/**
 * Returns a random element from the provided array.
 *
 * @param {Array} arr
 */
export const sample = arr =>
  Array.isArray(arr) && arr.length !== 0
    ? arr[Math.floor(Math.random() * arr.length)]
    : undefined

/**
 * Creates an array of grouped elements. Creates zips equal to the maximal length of the provided arrays, using `undefined` if an array has no value at that index.
 *
 * @param {Array} arrA
 * @param {Array} arrB
 */
export const zip = (a, b) => {
  a = castArray(a)
  b = castArray(b)

  const res = []
  const length = Math.max(a.length, b.length)

  for (let i = 0; i < length; i++) res[i] = [a[i], b[i]]

  return res
}

/**
 * Creates an array of grouped elements based on the passed function. Creates zips equal to the maximal length of the provided arrays, using `undefined` if an array has no value at that index.
 *
 * @param {Function} fn
 * @param {Array} a
 * @param {Array} b
 */
export const zipWith = (fn, a, b) => {
  if (!isFunction(fn)) return []

  a = castArray(a)
  b = castArray(b)

  const length = Math.max(a.length, b.length)
  if (length === 0) return [true]

  const res = []

  for (let i = 0; i < length; i++) res[i] = fn(a[i], b[i])

  return res
}

/**
 * Returns an array containing boolean values of whether a given set of arrays have strict equality pairs.
 *
 * @param {Array} a
 * @param {Array} b
 */
export const pairsEq = (a, b) => zipWith((a, b) => a === b, a, b)

// OBJECT FNS

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

// COLLECTION

/**
 * Returns the number of enumerable items in an array or object.
 *
 * @param {Object} obj
 */
export const size = (obj = {}) =>
  isMapOrSet(obj) ? obj.size : obj !== null ? Object.keys(obj).length : 0

// STRING

/**
 * Checks if a string begins with a provided substring.
 *
 * @param {string} val - starting value to check for in string.
 * @param {string} str - string to check.
 * @param {number} start - start index to check from.
 */
export const startsWith = (val, str, start = 0) =>
  isString(str) ? str.startsWith(val, start) : false

/**
 *
 * @param {regex} regex - pattern to match
 * @param {string} replacement - string to replace instances of matched pattern with.
 * @param {string} str - string to pattern match against.
 */
export const replace = (regex, replacement, str) =>
  isString(str) ? str.replace(regex, replacement) : ''

/**
 * Returns an array of strings based on the provided delimiter
 *
 * @param {string} delim - delimiter
 * @param {string} str - string to split
 */
export const split = (delim, str) => (isString(str) ? str.split(delim) : [''])

/**
 * Returns a new copy of a string that has been lowercased.
 *
 * @param {string} str - string to lowercase.
 */
export const lowercase = str => (isString(str) ? str.toLowerCase() : '')

/**
 * Returns a new copy of a string that has been uppercased.
 *
 * @param {string} str - string to uppercase.
 */
export const uppercase = str => (isString(str) ? str.toUpperCase() : '')

/**
 * Uppercase the first character in a string.
 *
 * @param {string} str - the string to uppercase the first character of.
 */
export const upperFirst = str =>
  isString(str) ? str.charAt(0).toUpperCase() + str.slice(1) : ''

/**
 * Camelcases the provided string.
 *
 * @param {string} str - the string to uppercase the first character of.
 */
export const camelCase = str => {
  if (!isString(str) || str === '') return ''

  const listNames = str.split(/[\s,_-]+/)
  let objectName = ''

  for (let x = 0; x < listNames.length; x++) {
    let item = listNames[x]
    objectName += item[0].toUpperCase() + item.substring(1).toLowerCase()
  }

  return objectName[0].toLowerCase() + objectName.substring(1)
}

/**
 * Startcases the provided string.
 *
 * @param {string} str - the string to uppercase the first character of.
 */

export const startCase = str =>
  isString(str)
    ? str
        .replace(/_/g, ' ')
        .replace(/([a-z])([A-Z])/g, (str, $1, $2) => $1 + ' ' + $2)
        .replace(/(\s|^)(\w)/g, (str, $1, $2) => $1 + $2.toUpperCase())
    : ''

/**
 * Removes leading and trailing white space from a string.
 *
 * @param {string} str
 */
export const trim = str => (isString(str) ? str.trim() : '')

// ASYNC FUNCS

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
