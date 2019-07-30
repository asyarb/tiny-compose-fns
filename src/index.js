import { curry } from 'curriable'

import {
  map as mapB,
  filter as filterB,
  forEach as forEachB,
  join as joinB,
  take as takeB,
  concat as concatB,
  find as findB,
  some as someB,
  flatDepth as flatDepthB,
  flatMap as flatMapB,
  slice as sliceB,
  includes as includesB,
  sortBy as sortByB,
  indexOf as indexOfB,
  lastIndexOf as lastIndexOfB,
  get as getB,
  has as hasB,
  merge as mergeB,
  mergeDeep as mergeDeepB,
  startsWith as startsWithB,
  replace as replaceB,
  split as splitB,
  chunk as chunkB,
} from './base'

/**
 * Call a sequence of curried functions.
 */
export const compose = (...c) => (...a) => {
  let i = c.length - 1
  a = c[i](...a)
  while (i--) a = c[i](a)
  return a
}

export const map = curry(mapB)
export const filter = curry(filterB)
export const forEach = curry(forEachB)
export const join = curry(joinB)
export const take = curry(takeB)
export const concat = curry(concatB)
export const find = curry(findB)
export const some = curry(someB)
export const flatDepth = curry(flatDepthB)
export const flatMap = curry(flatMapB)
export const slice = curry(sliceB)
export const includes = curry(includesB)
export const sortBy = curry(sortByB)
export const indexOf = curry(indexOfB)
export const lastIndexOf = curry(lastIndexOfB)
export const get = curry(getB)
export const has = curry(hasB)
export const merge = curry(mergeB)
export const mergeDeep = curry(mergeDeepB)
export const startsWith = curry(startsWithB)
export const replace = curry(replaceB)
export const split = curry(splitB)
export const chunk = curry(chunkB)

export {
  noop,
  isEmpty,
  isNull,
  isUndefined,
  isString,
  isNumber,
  isPlainObject,
  isFunction,
  first,
  last,
  tail,
  fromEntries,
  entries,
  keys,
  values,
  allProm,
  resolve,
  lowercase,
  camelCase,
  UPPERCASE,
  Upperfirst,
  trim,
  uniq,
  shuffle,
  flatDeep,
  flat,
  compact,
  reverse,
  sort,
  size,
  max,
  min,
  StartCase,
  sample,
} from './base'
