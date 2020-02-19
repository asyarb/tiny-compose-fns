import {
  noop,
  reduce,
  map,
  filter,
  forEach,
  join,
  first,
  last,
  tail,
  take,
  compact,
  concat,
  find,
  some,
  flat,
  flatDepth,
  flatDeep,
  flatMap,
  reverse,
  slice,
  includes,
  sort,
  sortWith,
  sortByDesc,
  sortBy,
  uniq,
  shuffle,
  indexOf,
  lastIndexOf,
  chunk,
  max,
  min,
  sample,
  toArray,
  castArray,
  splice,
  zip,
  zipWith,
  pairsEq,
} from '../noFp'

const arr = [1, 2, 3]
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

describe('pairsEq', () => {
  it('returns true in an array if given identical falsey inputs', () => {
    expect(pairsEq()).toEqual([true])
    expect(pairsEq(null, null)).toEqual([true])
    expect(pairsEq(true, true)).toEqual([true])
    expect(pairsEq(false, false)).toEqual([true])
  })

  it('returns false if given different falsey inputs', () => {
    expect(pairsEq(null)).toEqual([false])
    expect(pairsEq(null, undefined)).toEqual([false])
    expect(pairsEq(undefined, null)).toEqual([false])
    expect(pairsEq(true, false)).toEqual([false])
  })

  it('returns true if given empty arrays', () => {
    expect(pairsEq([], [])).toEqual([true])
  })

  it('returns false if given empty objects', () => {
    expect(pairsEq({}, {})).toEqual([false])
  })

  it('returns true if given identical non-paired inputs', () => {
    expect(pairsEq('foo', 'foo')).toEqual([true])
    expect(pairsEq(1, 1)).toEqual([true])
  })
})
