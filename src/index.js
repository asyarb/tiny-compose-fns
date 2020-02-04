import { curry } from 'curriable'

import {
  chunk as chunkB,
  concat as concatB,
  filter as filterB,
  find as findB,
  flatDepth as flatDepthB,
  flatMap as flatMapB,
  forEach as forEachB,
  get as getB,
  has as hasB,
  includes as includesB,
  indexOf as indexOfB,
  join as joinB,
  lastIndexOf as lastIndexOfB,
  map as mapB,
  merge as mergeB,
  mergeDeep as mergeDeepB,
  pairsEq as pairsEqB,
  propsEq as propsEqB,
  reduce as reduceB,
  replace as replaceB,
  slice as sliceB,
  some as someB,
  sortWith as sortWithB,
  sortBy as sortByB,
  sortByDesc as sortByDescB,
  splice as spliceB,
  split as splitB,
  startsWith as startsWithB,
  take as takeB,
  times as timesB,
  zip as zipB,
  zipWith as zipWithB,
} from './base'

export const compose = (...c) => (...a) => {
  let i = c.length - 1
  a = c[i](...a)
  while (i--) a = c[i](a)
  return a
}

export const chunk = curry(chunkB)
export const concat = curry(concatB)
export const filter = curry(filterB)
export const find = curry(findB)
export const flatDepth = curry(flatDepthB)
export const flatMap = curry(flatMapB)
export const forEach = curry(forEachB)
export const get = curry(getB)
export const has = curry(hasB)
export const includes = curry(includesB)
export const indexOf = curry(indexOfB)
export const join = curry(joinB)
export const lastIndexOf = curry(lastIndexOfB)
export const map = curry(mapB)
export const merge = curry(mergeB)
export const mergeDeep = curry(mergeDeepB)
export const pairsEq = curry(pairsEqB)
export const propsEq = curry(propsEqB)
export const reduce = curry(reduceB)
export const replace = curry(replaceB)
export const slice = curry(sliceB)
export const some = curry(someB)
export const sortWith = curry(sortWithB)
export const sortBy = curry(sortByB)
export const sortByDesc = curry(sortByDescB)
export const splice = curry(spliceB)
export const split = curry(splitB)
export const startsWith = curry(startsWithB)
export const take = curry(takeB)
export const times = curry(timesB)
export const zip = curry(zipB)
export const zipWith = curry(zipWithB)

export {
  allProm,
  camelCase,
  castArray,
  compact,
  entries,
  first,
  flat,
  flatDeep,
  fromEntries,
  isArray,
  isEmpty,
  isFunction,
  isNull,
  isNumber,
  isPlainObject,
  isString,
  isUndefined,
  kebabCase,
  keys,
  last,
  lowercase,
  max,
  min,
  noop,
  resolve,
  reverse,
  sample,
  shuffle,
  size,
  sort,
  startCase,
  tail,
  toArray,
  trim,
  uniq,
  uniqueId,
  uppercase,
  upperFirst,
  values,
} from './base'
