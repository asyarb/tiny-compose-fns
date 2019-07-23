// UTILS

/**
 * Function that does nothing.
 */
export const noop = () => undefined

export const isEmpty = obj =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length

export const isNull = val => val === null

export const isUndefined = val => typeof val === 'undefined'

export const isString = val => typeof val === 'string'

export const isNumber = val => typeof val === 'number'

export const random = (lower, upper) => {
  if (!upper || typeof upper === 'boolean') {
    upper = lower
    lower = 0
  }

  let randomic = Math.random() * upper
  return randomic >= lower ? randomic : random(lower, upper)
}

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

// ARRAY FNS

export const map = (fn = noop, arr = []) => arr.map(fn)

export const filter = (fn = noop, arr = []) => arr.filter(fn)

export const forEach = (fn = noop, arr = []) => arr.forEach(fn)

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

export const flatten = (arr = []) => arr.flat()

export const flattenDeep = (arr = []) => arr.flat(Infinity)

export const flatMap = (fn = noop, arr = []) => arr.flatMap(fn)

export const reverse = (arr = []) => {
  const copyArr = arr

  return copyArr.reverse()
}

export const slice = (str = 0, end = 0, arr = []) => arr.slice(str, end)

export const includes = (val, arr = []) => arr.includes(val)

const sortBy = key => (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0)
export const sort = (key, arr = []) => arr.concat().sort(sortBy(key))

export const uniq = (arr = []) => [...new Set(arr)]

export const shuffle = (arr = []) =>
  arr.concat().sort(() => Math.random() - 0.5)

export const indexOf = (val, arr = []) => arr.indexOf(val)

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

export const fromEntries = (arr = []) => Object.fromEntries(arr)

export const entries = (obj = {}) => Object.entries(obj)

export const keys = (obj = {}) => Object.keys(obj)

export const values = (obj = {}) => Object.values(obj)

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

export const merge = (target = {}, source = {}) => ({ ...source, ...target })

// COLLECTION

export const size = (obj = {}) => Object.keys(obj).length

// STRING

export const startsWith = (val, start = 0, str = '') =>
  str.startsWith(val, start)

export const replace = (regex, replacement = '', str = '') =>
  str.replace(regex, replacement)

export const split = (sep, str = '') => str.split(sep)

export const toLower = (str = '') => str.toLowerCase()

export const toUpper = (str = '') => str.toUpperCase()

export const upperFirst = str =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : ''

export const trim = (str = '') => str.trim()
