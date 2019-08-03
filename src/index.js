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
  times as timesB,
  splice as spliceB,
  zip as zipB,
  zipWith as zipWithB,
  pairsEq as pairsEqB,
  propsEq as propsEqB,
  reduce as reduceB,
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
export const times = curry(timesB)
export const splice = curry(spliceB)
export const zip = curry(zipB)
export const zipWith = curry(zipWithB)
export const pairsEq = curry(pairsEqB)
export const propsEq = curry(propsEqB)
export const reduce = curry(reduceB)

export {
  noop,
  isEmpty,
  isNull,
  isUndefined,
  isString,
  isNumber,
  isPlainObject,
  isFunction,
  isArray,
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
  uppercase,
  upperFirst,
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
  startCase,
  sample,
  uniqueId,
  toArray,
  castArray,
} from './base'
