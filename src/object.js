import { isPlainObject } from './utils'

export const get = (key, obj, def, p, undef) => {
  key = key.split ? key.split('.') : key

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }

  return obj === undef ? def : obj
}

export const has = (key, obj) => Boolean(get(key, obj))

export const fromEntries = arr =>
  Array.isArray(arr) ? Object.fromEntries(arr) : {}

export const entries = obj => (isPlainObject(obj) ? Object.entries(obj) : [])

export const keys = obj => (isPlainObject(obj) ? Object.keys(obj) : [])

export const values = obj => (isPlainObject(obj) ? Object.values(obj) : [])

export const merge = (target, ...sources) => {
  const targetSrc = Object.assign({}, target)
  return Object.assign(targetSrc, ...sources)
}

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

export const propsEq = (key, a, b) =>
  isPlainObject(a) && isPlainObject(b) && typeof key === 'string'
    ? get(key, a) === get(key, b)
    : false
