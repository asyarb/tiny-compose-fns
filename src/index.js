// UTILS

/**
 * Function that only returns undefined.
 */
export const noop = () => undefined

/**
 * Returns true if the provided object is empty.
 *
 * @param {Object} obj
 */
export const isEmpty = obj =>
  [Object, Array].includes((obj || {}).constructor) &&
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
  val && typeof val === 'object' && !Array.isArray(val)

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
 * @param {*} lower - lower bound of the random range
 * @param {*} upper - upper bound of the random range
 */
export const random = (lower, upper) => {
  if (!upper || typeof upper === 'boolean') {
    upper = lower
    lower = 0
  }

  let randomic = Math.random() * upper
  return randomic >= lower ? randomic : random(lower, upper)
}

// ARRAY FNS

/**
 * Composable version of native Array.map().
 *
 * @param {*} fn
 * @param {*} arr
 *
 * @returns a new array with modified values based on the iteratee.
 */
export const map = (fn = noop, arr = []) => arr.map(fn)

/**
 * Composable version of native Array.filter().
 *
 * @param {*} fn - iteratee to run on every element
 * @param {*} arr
 *
 * @return new array with filtered values based on the iteratee
 */
export const filter = (fn = noop, arr = []) => arr.filter(fn)

/**
 * Composable version of native Array.forEach().
 *
 * @param {*} fn
 * @param {*} arr
 *
 */
export const forEach = (fn = noop, arr = []) => arr.forEach(fn)

/**
 * Composable version of native Array.join().
 *
 * @param {*} sep
 * @param {*} arr
 */
export const join = (sep = '', arr = []) => arr.join(sep)

/**
 * Returns the first element of an array.
 *
 * @param {Array} arr - Array to extract the first element from.
 */
export const first = (arr = []) => arr[0]

/**
 * Returns the last element of an array.
 *
 * @param {Array} arr - Array to extract the last element from.
 */
export const last = (arr = []) => arr[arr.length - 1]

/**
 * Returns all but the first element of an array.
 *
 * @param {Array} arr - Array to extract values from.
 */
export const tail = (arr = []) => {
  const [, ...x] = arr

  return x
}

/**
 * Creates a sliced copoy of an array with a specified number of elements taken from the beginning.
 *
 * @param {number} num
 * @param {Array} arr
 */
export const take = (num = 1, arr = []) => {
  if (!(arr !== null && arr.length)) {
    return []
  }

  return arr.slice(0, num < 0 ? 0 : num)
}

/**
 * Creates an array with all falsy values removed.
 *
 * @param {Array} arr
 */
export const compact = (arr = []) => arr.filter(Boolean)

/**
 * Creates a new array concatenating the provided array with any additional arrays and/or values.
 *
 * @param {Array} arr
 * @param {Array} vals
 */
export const concat = (arr = [], vals) => arr.concat(vals)

/**
 * Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
 *
 * @param {function} fn
 * @param {Array} arr
 */
export const find = (fn = noop, arr = []) => arr.find(fn)

/**
 * Tests whether any of the elements in the array pass the test implemented by the provided function.
 *
 * @param {function} fn
 * @param {Array} arr
 */
export const some = (fn = noop, arr = []) => arr.some(fn)

/**
 * Flattens an array a single level deep.
 *
 * @param {Array} arr
 */
export const flatten = (arr = []) => arr.flat()

/**
 * Recursively flattens an array to a single level.
 *
 * @param {Array} arr
 */
export const flattenDeep = (arr = []) => arr.flat(Infinity)

/**
 * Flattens an array a single level deep and maps over that array.
 *
 * @param {*} fn
 * @param {Array} arr
 */
export const flatMap = (fn = noop, arr = []) => arr.flatMap(fn)

/**
 * Reverses the values in an array.
 *
 * @param {Array} arr
 */
export const reverse = (arr = []) => arr.concat().reverse()

/**
 * Copies portion of array into a new object based on provided parameters.
 *
 * @param {number} begin
 * @param {number} end
 * @param {Array} arr
 */
export const slice = (begin = 0, end = 0, arr = []) => arr.slice(begin, end)

/**
 * Checks for a value is in the array.
 *
 * @param {*} val
 * @param {Array} arr
 *
 */
export const includes = (val, arr = []) => arr.includes(val)

/**
 * Sorts an array of object based on an object key provided by a parameter.
 *
 * @param {string} key
 */
const sortBy = key => (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0)
export const sort = (key, arr = []) => arr.concat().sort(sortBy(key))

/**
 * Produces a duplicate-free version of an array.
 *
 * @param {*} arr
 */
export const uniq = (arr = []) => [...new Set(arr)]

/**
 * Returns a new array with shuffled values of the provided array.
 *
 * @param {*} arr
 */
export const shuffle = (arr = []) =>
  arr.concat().sort(() => Math.random() - 0.5)

/**
 * Returns the index of the provided value
 *
 * @param {*} val
 * @param {*} arr
 *
 * @returns first index of the element in the array, -1 if not found.
 */
export const indexOf = (val, arr = []) => arr.indexOf(val)

/**
 * Returns the last index of the provided value
 *
 * @param {*} val
 * @param {*} arr
 *
 * @returns last index of the element in the array, -1 if not found.
 */
export const lastIndexOf = (val, arr = []) => arr.lastIndexOf(val)

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
export const fromEntries = (arr = []) => Object.fromEntries(arr)

/**
 * Returns an array of key-value pairs from an object.
 *
 * @param {Object} obj
 */
export const entries = (obj = {}) => Object.entries(obj)

/**
 * Returns an array of the objects own enumerable properties.
 *
 * @param {Object} obj
 */
export const keys = (obj = {}) => Object.keys(obj)

/**
 * Returns an array of the objects own enumerable values.
 *
 * @param {Object} obj
 */
export const values = (obj = {}) => Object.values(obj)

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
 * Shallowly merges two objects together.
 *
 * @param {Object} target
 * @param {Object} source
 */
export const merge = (target = {}, source = {}) => ({ ...source, ...target })

// COLLECTION

/**
 * Returns the number of enumerable items in an array or object.
 *
 * @param {Object} obj
 */
export const size = (obj = {}) => Object.keys(obj).length

// STRING

/**
 * Checks if a string begins with a provided substring.
 *
 * @param {string} val - starting value to check for in string.
 * @param {number} start - start index to check from.
 * @param {string} str - string to check.
 */
export const startsWith = (val, start = 0, str = '') =>
  str.startsWith(val, start)

/**
 *
 * @param {regex} regex - pattern to match
 * @param {string} replacement - string to replace instances of matched pattern with.
 * @param {string} str - string to pattern match against.
 */
export const replace = (regex, replacement = '', str = '') =>
  str.replace(regex, replacement)

/**
 * Returns an array of strings based on the provided delimiter
 *
 * @param {string} delim - delimiter
 * @param {string} str - string to split
 */
export const split = (delim, str = '') => str.split(delim)

/**
 * Returns a new copy of a string that has been lowercased.
 *
 * @param {string} str - string to lowercase.
 */
export const toLower = (str = '') => str.toLowerCase()

/**
 * Returns a new copy of a string that has been uppercased.
 *
 * @param {string} str - string to uppercase.
 */
export const toUpper = (str = '') => str.toUpperCase()

/**
 * Uppercase the first character in a string.
 *
 * @param {string} str - the string to uppercase the first character of.
 */
export const upperFirst = str =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : ''

/**
 * Camelcases the provided string.
 *
 * @param {string} str - the string to uppercase the first character of.
 */
export const camelCase = (str = '') =>
  str.replace(/^.|-./g, (letter, index) =>
    index === 0 ? letter.toLowerCase() : letter.substr(1).toUpperCase()
  )

/**
 * Removes leading and trailing white space from a string.
 *
 * @param {string} str
 */
export const trim = (str = '') => str.trim()

// ASYNC FUNCS

/**
 * Returns a single promise when all promises in the iterable array have resolved, or rejects when a single iteratee rejects.
 *
 * @param {Array} arr
 */
export const allPromises = async arr => await Promise.all(arr)

/**
 * Returns a promise when the passed value has resolved.
 *
 * @param {Promise} val
 */
export const resolve = async val => await Promise.resolve(val)
