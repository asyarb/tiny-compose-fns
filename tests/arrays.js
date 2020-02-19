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

describe('uniq', () => {
  const duplicatedArr = [...arr, ...arr, ...arr]

  it('returns an empty array if given a bad parameter', () => {
    expect(uniq(undefined)).toEqual([])
    expect(uniq(null)).toEqual([])
    expect(uniq(1)).toEqual([])
    expect(uniq('foo')).toEqual([])
    expect(uniq({})).toEqual([])
    expect(uniq(noop)).toEqual([])
  })

  it('returns a new array with duplicated values removed', () => {
    expect(uniq(duplicatedArr)).toEqual(arr)
  })
})

describe('shuffle', () => {
  it('returns an empty array if provided a non array input', () => {
    expect(shuffle(undefined)).toEqual([])
    expect(shuffle(null)).toEqual([])
    expect(shuffle({})).toEqual([])
    expect(shuffle(1)).toEqual([])
    expect(shuffle('')).toEqual([])
  })

  it('returns an empty array if given an empty array', () => {
    expect(shuffle([])).toEqual([])
  })

  it('immutably shuffles an array', () => {
    const bigArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(shuffle(bigArr)).not.toEqual([])
    expect(bigArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})

describe('indexOf', () => {
  const doubleArr = [...arr, ...arr]

  it('returns -1 if searching for undefined or null', () => {
    expect(indexOf(undefined, doubleArr)).toBe(-1)
    expect(indexOf(null, doubleArr)).toBe(-1)
  })

  it('returns -1 if passed an undefined or null collection to search', () => {
    expect(indexOf()).toBe(-1)
    expect(indexOf(1)).toBe(-1)
    expect(indexOf(1, undefined)).toBe(-1)
    expect(indexOf(1, null)).toBe(-1)
  })

  it('returns -1 if the value is not in the collection', () => {
    expect(indexOf(4, doubleArr)).toBe(-1)
    expect(indexOf(1, doubleArr)).not.toBe(-1)
  })

  it('returns the first index of a value in the collection', () => {
    expect(indexOf(2, doubleArr)).toBe(1)
    expect(indexOf(3, doubleArr)).toBe(2)
    expect(indexOf(1, doubleArr)).not.toBe(3)
  })
})

describe('lastIndexOf', () => {
  const doubleArr = [...arr, ...arr]

  it('returns -1 if searching for undefined or null', () => {
    expect(lastIndexOf(undefined, doubleArr)).toBe(-1)
    expect(lastIndexOf(null, doubleArr)).toBe(-1)
  })

  it('returns -1 if passed an undefined or null collection to search', () => {
    expect(lastIndexOf()).toBe(-1)
    expect(lastIndexOf(1)).toBe(-1)
    expect(lastIndexOf(1, undefined)).toBe(-1)
    expect(lastIndexOf(1, null)).toBe(-1)
  })

  it('returns -1 if the value is not in the collection', () => {
    expect(lastIndexOf(4, doubleArr)).toBe(-1)
    expect(lastIndexOf(1, doubleArr)).not.toBe(-1)
  })

  it('returns the last index of a value in the collection', () => {
    expect(lastIndexOf(2, doubleArr)).toBe(4)
    expect(lastIndexOf(3, doubleArr)).toBe(5)
    expect(lastIndexOf(1, doubleArr)).not.toBe(0)
  })
})

describe('chunk', () => {
  it('returns an empty array if given undefined or null', () => {
    expect(chunk()).toEqual([])
    expect(chunk(null)).toEqual([])
    expect(chunk(null, null)).toEqual([])
  })

  it('returns an empty array if given a non number size', () => {
    expect(chunk('foo', arr)).toEqual([])
    expect(chunk([], arr)).toEqual([])
    expect(chunk({}, arr)).toEqual([])
    expect(chunk(noop, arr)).toEqual([])
  })

  it('returns an empty array if array parameter is not an array', () => {
    expect(chunk(2, {})).toEqual([])
    expect(chunk(2, noop)).toEqual([])
    expect(chunk(2, 'foo')).toEqual([])
  })

  it('returns an array of chunked arrays based on the given size', () => {
    expect(chunk(1, arr)).toEqual([[1], [2], [3]])
    expect(chunk(2, arr)).toEqual([[1, 2], [3]])
    expect(chunk(3, arr)).toEqual([[1, 2, 3]])
    expect(chunk(4, arr)).toEqual([[1, 2, 3]])
  })
})

describe('max', () => {
  it('returns undefined if array is falsey', () => {
    expect(max()).toBeUndefined()
    expect(max(null)).toBeUndefined()
    expect(max(false)).toBeUndefined()
  })

  it('returns undefined if array is empty', () => {
    expect(max([])).toBeUndefined()
  })

  it('returns the maximum value of an array', () => {
    expect(max(arr)).toBe(3)
  })
})

describe('min', () => {
  it('returns undefined if array is falsey', () => {
    expect(min()).toBeUndefined()
    expect(min(null)).toBeUndefined()
    expect(min(false)).toBeUndefined()
  })

  it('returns undefined if array is empty', () => {
    expect(min([])).toBeUndefined()
  })

  it('returns the minimum value of an array', () => {
    expect(min(arr)).toBe(1)
  })
})

describe('sample', () => {
  it('returns undefined if given a falsey value', () => {
    expect(sample()).toBeUndefined()
    expect(sample(null)).toBeUndefined()
    expect(sample(false)).toBeUndefined()
  })

  it('returns undefined if given an empty array', () => {
    expect(sample([])).toBeUndefined()
  })

  it('returns undefined if given a non-array', () => {
    expect(sample({})).toBeUndefined()
    expect(sample(noop)).toBeUndefined()
  })

  it('returns a random value from the array', () => {
    const randomNum = sample(arr)

    expect(arr.includes(randomNum)).toBe(true)
  })
})

describe('castArray', () => {
  it('returns an empty array if given an array', () => {
    expect(castArray([])).toEqual([])
  })

  it('returns an array with the value in it', () => {
    expect(castArray(1)).toEqual([1])
    expect(castArray({ foo: 'bar' })).toEqual([{ foo: 'bar' }])
    expect(castArray('fooBar')).toEqual(['fooBar'])
    expect(castArray(null)).toEqual([null])
    expect(castArray(undefined)).toEqual([undefined])
    expect(castArray()).toEqual([])
  })
})

describe('toArray', () => {
  it('returns an empty array if given empty input', () => {
    expect(toArray()).toEqual([])
    expect(toArray(null)).toEqual([])
    expect(toArray(false)).toEqual([])
  })

  it('returns an empty array if given a number', () => {
    expect(toArray(1)).toEqual([])
    expect(toArray(213)).toEqual([])
  })

  it('returns an array from the provided input', () => {
    expect(toArray({ foo: 'bar', hello: 'world' })).toEqual(['bar', 'world'])
    expect(toArray('foo')).toEqual(['f', 'o', 'o'])
  })
})

describe('splice', () => {
  it('returns an empty array if given falsey inputs', () => {
    expect(splice()).toEqual([])
    expect(splice(null, null, null, null)).toEqual([])
    expect(splice(false, false, false, false)).toEqual([])
  })

  it('splices to the front of the array if given an invalid start index parameter', () => {
    expect(splice(undefined, 0, 4, arr)).toEqual([4, 1, 2, 3])
    expect(splice('foo', 0, 4, arr)).toEqual([4, 1, 2, 3])
    expect(splice({}, 0, 4, arr)).toEqual([4, 1, 2, 3])
    expect(splice(noop, 0, 4, arr)).toEqual([4, 1, 2, 3])
  })

  it('splices to the specified start index', () => {
    expect(splice(1, 0, 4, arr)).toEqual([1, 4, 2, 3])
    expect(splice(2, 0, 4, arr)).toEqual([1, 2, 4, 3])
  })

  it('splices the array and replaces values based on the deleteCount parameter', () => {
    expect(splice(1, 1, 4, arr)).toEqual([1, 4, 3])
    expect(splice(1, 2, 4, arr)).toEqual([1, 4])
  })

  it('immutably splices arrays', () => {
    splice(1, 0, 4, arr)

    expect(arr).toEqual([1, 2, 3])
  })
})

describe('zip', () => {
  it('zips falsey inputs into an array', () => {
    expect(zip()).toEqual([[undefined, undefined]])
    expect(zip(null, null)).toEqual([[null, null]])
    expect(zip(false, false)).toEqual([[false, false]])
  })

  it('zips other values into grouped elements', () => {
    expect(zip('foo', 'bar')).toEqual([['foo', 'bar']])
    expect(zip(1, {})).toEqual([[1, {}]])
  })

  it('zips two arrays into grouped elements', () => {
    const arr2 = [4, 5, 6]

    expect(zip(arr, arr2)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ])
  })

  it('zips two arrays with differing elements', () => {
    const arr2 = [4, 5, 6, 7]

    expect(zip(arr, arr2)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
      [undefined, 7],
    ])
  })
})

describe('zipWith', () => {
  it('returns an empty array if iteratee is not a function.', () => {
    expect(zipWith()).toEqual([])
    expect(zipWith(null, arr, arr)).toEqual([])
    expect(zipWith(false, arr, arr)).toEqual([])
    expect(zipWith({}, arr, arr)).toEqual([])
    expect(zipWith([], arr, arr)).toEqual([])
  })

  it('zips falsey inputs based on the provided iteratee', () => {
    expect(zipWith(noop)).toEqual([undefined])
    expect(zipWith((a, b) => [a, b], null, null)).toEqual([[null, null]])
  })

  it('zips inputs based on the provided iteratee', () => {
    expect(zipWith((a, b) => a + b, arr, arr)).toEqual([2, 4, 6])
    expect(zipWith((a, b) => a === b, arr, arr)).toEqual([true, true, true])
  })

  it('zips inputs with differing lengths to the max value', () => {
    const arr2 = [1, 2, 3, 4]

    expect(zipWith((a, b) => a === b, arr, arr2)).toEqual([
      true,
      true,
      true,
      false,
    ])
  })
})

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
