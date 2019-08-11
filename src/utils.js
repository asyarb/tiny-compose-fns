import { isMapOrSet } from './internal'

export const noop = () => undefined

export const uniqueId = (() => {
  let num = 0

  return prefix => {
    prefix = prefix ? String(prefix) : ''
    num += 1
    return prefix + num
  }
})()

export const isEmpty = obj =>
  isMapOrSet(obj)
    ? !obj.size
    : [Object, Array].includes((obj || {}).constructor) &&
      !Object.entries(obj || {}).length

export const isNull = val => val === null

export const isUndefined = val => typeof val === 'undefined'

export const isString = val => typeof val === 'string'

export const isNumber = val => typeof val === 'number'

export const isPlainObject = val =>
  isMapOrSet(val)
    ? false
    : val !== null && typeof val === 'object' && !Array.isArray(val)

export const isFunction = val =>
  !!(val && val.constructor && val.call && val.apply)

export const isArray = val => Array.isArray(val)

export const random = (lower, upper) => {
  if (!upper || typeof upper === 'boolean') {
    upper = lower
    lower = 0
  }

  let randomic = Math.random() * upper
  return randomic >= lower ? randomic : random(lower, upper)
}

export const size = (obj = {}) =>
  isMapOrSet(obj) ? obj.size : obj !== null ? Object.keys(obj).length : 0

export const allProm = async arr =>
  Array.isArray(arr) ? await Promise.all(arr) : []

export const resolve = async val => await Promise.resolve(val)
