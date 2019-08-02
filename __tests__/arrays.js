import {
  noop,
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
} from '../dist/noFp'

const arr = [1, 2, 3]
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

describe('map', () => {
  it('throws error if provided a bad function', () => {
    expect(() => map(undefined, undefined)).toThrow()
    expect(() => map(undefined, null)).toThrow()
    expect(() => map(undefined, [])).toThrow()

    expect(() => map(null, undefined)).toThrow()
    expect(() => map(null, null)).toThrow()
    expect(() => map(null, [])).toThrow()

    expect(() => map(1, [])).toThrow()
    expect(() => map('foo', [])).toThrow()
  })

  it('returns an empty array with invalid inputs', () => {
    expect(map(noop, undefined)).toEqual([])
    expect(map(noop, null)).toEqual([])
    expect(map(noop, 1)).toEqual([])
    expect(map(noop, 'foo')).toEqual([])
  })

  it('immutably maps over an array and returns a new array', () => {
    const res = map(x => x + 1, arr)

    expect(res).toEqual([2, 3, 4])
    expect(arr).toEqual([1, 2, 3])
  })
})

describe('filter', () => {
  it('throws error if provided a bad function', () => {
    expect(() => filter(undefined, undefined)).toThrow()
    expect(() => filter(undefined, null)).toThrow()
    expect(() => filter(undefined, [])).toThrow()

    expect(() => filter(null, undefined)).toThrow()
    expect(() => filter(null, null)).toThrow()
    expect(() => filter(null, [])).toThrow()

    expect(() => filter(1, [])).toThrow()
    expect(() => filter('foo', [])).toThrow()
  })

  it('returns an empty array with invalid inputs', () => {
    expect(filter(noop, undefined)).toEqual([])
    expect(filter(noop, null)).toEqual([])
    expect(filter(noop, 1)).toEqual([])
    expect(filter(noop, 'foo')).toEqual([])
  })

  it('immutably filters an array and returns a new array', () => {
    const res = filter(x => x === 1, arr)

    expect(res).toEqual([1])
    expect(arr).toEqual([1, 2, 3])
  })
})

describe('forEach', () => {
  it('throws error if provided a bad function', () => {
    expect(() => forEach(undefined, undefined)).toThrow()
    expect(() => forEach(undefined, null)).toThrow()
    expect(() => forEach(undefined, [])).toThrow()

    expect(() => forEach(null, undefined)).toThrow()
    expect(() => forEach(null, null)).toThrow()
    expect(() => forEach(null, [])).toThrow()

    expect(() => forEach(1, [])).toThrow()
    expect(() => forEach('foo', [])).toThrow()
  })

  it('returns undefined', () => {
    expect(forEach(noop, [1, 2, 3])).toBe(undefined)
  })

  it('immutably runs a sideeffect over an array', () => {
    let sum = 0
    forEach(x => (sum += x), arr)

    expect(sum).toBe(6)
  })
})

describe('join', () => {
  it('returns an empty string on invalid inputs', () => {
    expect(join()).toBe('')
    expect(join(undefined, undefined)).toBe('')
    expect(join(undefined, null)).toBe('')
    expect(join(undefined, [])).toBe('')
    expect(join(undefined, {})).toBe('')
    expect(join(undefined, 1)).toBe('')
    expect(join(undefined, '')).toBe('')

    expect(join(null, undefined)).toBe('')
    expect(join(null, null)).toBe('')
    expect(join(null, [])).toBe('')
    expect(join(null, {})).toBe('')
    expect(join(null, 1)).toBe('')
    expect(join(null, '')).toBe('')

    expect(join({}, undefined)).toBe('')
    expect(join({}, null)).toBe('')
    expect(join({}, [])).toBe('')
    expect(join({}, {})).toBe('')
    expect(join({}, 1)).toBe('')
    expect(join({}, '')).toBe('')
  })

  it('returns a string by joining array values by separator', () => {
    expect(join('-', arr)).toBe('1-2-3')
    expect(join('foo', arr)).toBe('1foo2foo3')
    expect(join(50, arr)).toBe('1502503')
  })
})

describe('first', () => {
  it('returns undefined if given an empty array', () => {
    expect(first([])).toBeUndefined()
    expect(first(undefined)).toBeUndefined()
    expect(first(null)).toBeUndefined()
    expect(first(1)).toBeUndefined()
    expect(first('foo')).toBeUndefined()
    expect(first({})).toBeUndefined()
  })

  it('returns the first element from an array', () => {
    expect(first(arr)).toBe(1)
  })
})

describe('last', () => {
  it('returns undefined if given an empty array', () => {
    expect(last([])).toBeUndefined()
    expect(last(undefined)).toBeUndefined()
    expect(last(null)).toBeUndefined()
    expect(last(1)).toBeUndefined()
    expect(last('foo')).toBeUndefined()
    expect(last({})).toBeUndefined()
  })

  it('returns the last element from an array', () => {
    expect(last(arr)).toBe(3)
  })
})

describe('tail', () => {
  it('returns empty array if given an empty input', () => {
    expect(tail(undefined)).toEqual([])
    expect(tail(null)).toEqual([])
    expect(tail(1)).toEqual([])
    expect(tail('foo')).toEqual([])
    expect(tail({})).toEqual([])
    expect(tail([])).toEqual([])
  })

  it('returns the tail elements from an array', () => {
    expect(tail(arr)).toEqual([2, 3])
  })
})

describe('take', () => {
  it('returns empty array if both params are undefined or null', () => {
    expect(take(undefined, undefined)).toEqual([])
    expect(take(undefined, null)).toEqual([])
    expect(take(null, undefined)).toEqual([])
    expect(take(null, null)).toEqual([])
  })

  it('returns one item array if num param is undefined', () => {
    expect(take(undefined, arr)).toEqual([1])
    expect(take(null, arr)).toEqual([1])
  })

  it('returns empty array if num param is bad', () => {
    expect(take('', arr)).toEqual([])
    expect(take([], arr)).toEqual([])
    expect(take({}, arr)).toEqual([])
  })

  it('returns empty array if arr param is bad', () => {
    expect(take(1, {})).toEqual([])
    expect(take(2, 1)).toEqual([])
    expect(take(2, 'foo')).toEqual([])
  })

  it('returns empty array if given empty array', () => {
    expect(take(2, [])).toEqual([])
  })

  it('immutably returns the taken subarray from an array', () => {
    expect(take(2, arr)).toEqual([1, 2])
    expect(arr).toEqual([1, 2, 3])
  })
})

describe('compact', () => {
  const falseyArr = [false, 0, '', undefined, NaN, 1, 2, 3]

  it('returns an empty array given undefined or null', () => {
    expect(compact(undefined)).toEqual([])
    expect(compact(null)).toEqual([])
  })

  it('returns an empty array if given bad values', () => {
    expect(compact('foo')).toEqual([])
    expect(compact(1)).toEqual([])
    expect(compact({})).toEqual([])
  })

  it('immutably returns a new compacted array', () => {
    expect(compact(falseyArr)).toEqual([1, 2, 3])
    expect(falseyArr).toEqual([false, 0, '', undefined, NaN, 1, 2, 3])
  })
})

describe('concat', () => {
  it('returns an array of one undefined if given undefined', () => {
    expect(concat(undefined)).toEqual([undefined])
    expect(concat(undefined, undefined)).toEqual([undefined])
  })

  it('returns an array of with one null if given null', () => {
    expect(concat(null)).toEqual([null])
    expect(concat(null, null)).toEqual([null])
  })

  it('immutably concatenates array values', () => {
    expect(concat(arr, 4)).toEqual([1, 2, 3, 4])
    expect(concat(arr, 'foo')).toEqual([1, 2, 3, 'foo'])
    expect(concat(arr, [])).toEqual([1, 2, 3])
    expect(concat(arr, {})).toEqual([1, 2, 3, {}])
    expect(concat(arr, null)).toEqual([1, 2, 3, null])
    expect(concat(arr, undefined)).toEqual([1, 2, 3, undefined])
  })
})

describe('find', () => {
  it('throws error if function is bad', () => {
    expect(() => find(undefined, arr)).toThrow()
    expect(() => find(null, arr)).toThrow()
    expect(() => find(1, arr)).toThrow()
    expect(() => find('foo', arr)).toThrow()
    expect(() => find({}, arr)).toThrow()
  })

  it('returns undefined if colection is bad', () => {
    expect(find(noop, undefined)).toBeUndefined()
    expect(find(noop, null)).toBeUndefined()
    expect(find(noop, '')).toBeUndefined()
    expect(find(noop, 1)).toBeUndefined()
    expect(find(noop, {})).toBeUndefined()
  })

  it('returns undefined if searched value is not in the collection', () => {
    expect(find(item => item === 4, arr)).toBeUndefined()
    expect(find(item => item.user === 'bob', users)).toBeUndefined()
  })

  it('returns the searched value', () => {
    expect(find(item => item === 2, arr)).toBe(2)
    expect(find(item => item === 3, arr)).toBe(3)
    expect(find(item => item.user === 'fred', users)).toEqual(users[1])
  })
})

describe('some', () => {
  it('throws error if function is bad', () => {
    expect(() => some(undefined, arr)).toThrow()
    expect(() => some(null, arr)).toThrow()
    expect(() => some(1, arr)).toThrow()
    expect(() => some('foo', arr)).toThrow()
    expect(() => some({}, arr)).toThrow()
  })

  it('returns false if arr is bad or empty', () => {
    expect(some(() => {}, undefined)).toBe(false)
    expect(some(() => {}, null)).toBe(false)
    expect(some(() => {}, [])).toBe(false)
    expect(some(() => {}, 1)).toBe(false)
    expect(some(() => {}, 'foo')).toBe(false)
    expect(some(() => {}, {})).toBe(false)
  })

  it('returns true if an element matches the function criteria', () => {
    expect(some(i => i === 2, arr)).toBe(true)
    expect(some(i => i.user === 'fred', users)).toBe(true)
  })
})

describe('flat', () => {
  const deepArr = [arr, arr, arr]

  it('returns an empty array if argument is bad', () => {
    expect(flat(undefined)).toEqual([])
    expect(flat(null)).toEqual([])
    expect(flat({})).toEqual([])
    expect(flat(1)).toEqual([])
    expect(flat('foo')).toEqual([])
  })

  it('removes holes in arrays', () => {
    const holeArr = [1, 2, , 3, 4]

    expect(flat(holeArr)).toEqual([1, 2, 3, 4])
  })

  it('immutably flattens an array a single level', () => {
    expect(flat(deepArr)).toEqual([...arr, ...arr, ...arr])
    expect(deepArr).toEqual([arr, arr, arr])
  })
})

describe('flatDepth', () => {
  const deepArr = [[[arr]], [arr], arr]

  it('flattens a single level if num is undefined', () => {
    expect(flatDepth(undefined, deepArr)).toEqual([[arr], arr, ...arr])
  })

  it('returns the provided array if num is not a number, but not undefined', () => {
    expect(flatDepth(null, deepArr)).toEqual(deepArr)
    expect(flatDepth('foo', deepArr)).toEqual(deepArr)
    expect(flatDepth({}, deepArr)).toEqual(deepArr)
    expect(flatDepth([], deepArr)).toEqual(deepArr)
  })

  it('returns an empty array if argument is bad', () => {
    expect(flatDepth(1, undefined)).toEqual([])
    expect(flatDepth(2, null)).toEqual([])
    expect(flatDepth(3, {})).toEqual([])
    expect(flatDepth(4, 1)).toEqual([])
    expect(flatDepth(5, 'foo')).toEqual([])
  })

  it('removes holes in arrays', () => {
    const holeArr = [1, 2, , 3, 4]

    expect(flatDepth(1, holeArr)).toEqual([1, 2, 3, 4])
  })

  it('immutably flattens an array a with the specified depth level', () => {
    expect(flatDepth(1, deepArr)).toEqual([[arr], arr, ...arr])
    expect(flatDepth(2, deepArr)).toEqual([arr, ...arr, ...arr])
    expect(deepArr).toEqual([[[arr]], [arr], arr])
  })
})

describe('flatDeep', () => {
  const deepArr = [[[arr]], [arr], arr]

  it('returns an empty array if argument is bad', () => {
    expect(flatDeep(undefined)).toEqual([])
    expect(flatDeep(null)).toEqual([])
    expect(flatDeep({})).toEqual([])
    expect(flatDeep(1)).toEqual([])
    expect(flatDeep('foo')).toEqual([])
  })

  it('removes holes in arrays', () => {
    const holeArr = [1, 2, , 3, 4]

    expect(flatDeep(holeArr)).toEqual([1, 2, 3, 4])
  })

  it('immutably flattens an array deeply', () => {
    expect(flatDeep(deepArr)).toEqual([...arr, ...arr, ...arr])

    expect(deepArr).toEqual([[[arr]], [arr], arr])
  })
})

describe('flatMap', () => {
  const deepArr = [arr, arr, arr]

  it('throws an error if provided function is bad', () => {
    expect(() => flatMap(undefined, deepArr)).toThrow()
    expect(() => flatMap(null, deepArr)).toThrow()
    expect(() => flatMap(1, deepArr)).toThrow()
    expect(() => flatMap('foo', deepArr)).toThrow()
    expect(() => flatMap({}, deepArr)).toThrow()
    expect(() => flatMap([], deepArr)).toThrow()
  })

  it('returns an empty array if argument is bad', () => {
    expect(flatMap(noop, undefined)).toEqual([])
    expect(flatMap(noop, null)).toEqual([])
    expect(flatMap(noop, {})).toEqual([])
    expect(flatMap(noop, 1)).toEqual([])
    expect(flatMap(noop, 'foo')).toEqual([])
  })

  it('removes holes in arrays', () => {
    const holeArr = [1, 2, , 3, 4]

    expect(flatMap(() => 1, holeArr)).toEqual([1, 1, 1, 1])
  })

  it('immutably maps and then flattens over an array ', () => {
    expect(flatMap(i => i, deepArr)).toEqual([...arr, ...arr, ...arr])
    expect(flatMap(() => 1, deepArr)).toEqual([1, 1, 1])

    expect(deepArr).toEqual([arr, arr, arr])
  })
})

describe('reverse', () => {
  it('returns the same value if not provided an array', () => {
    expect(reverse(undefined)).toBeUndefined()
    expect(reverse(null)).toBe(null)
    expect(reverse(1)).toBe(1)
    expect(reverse('foo')).toBe('foo')
    expect(reverse({})).toEqual({})
    expect(reverse(noop)).toBe(noop)
  })

  it('immutably reverses an array', () => {
    expect(reverse([])).toEqual([])
    expect(reverse(arr)).toEqual([3, 2, 1])

    expect(arr).toEqual([1, 2, 3])
  })
})

describe('slice', () => {
  it('returns an empty array if provided value is not an array', () => {
    expect(slice(0, 1, undefined)).toEqual([])
    expect(slice(0, 1, null)).toEqual([])
    expect(slice(0, 1, 'foo')).toEqual([])
    expect(slice(0, 1, {})).toEqual([])
  })

  it('returns an empty array if provided an empty array', () => {
    expect(slice(0, 1, [])).toEqual([])
  })

  it('immutably returns a new array of the specified slice section', () => {
    expect(slice(0, 2, arr)).toEqual([1, 2])

    expect(arr).toEqual([1, 2, 3])
  })
})

describe('includes', () => {
  it('returns false if array is a bad value', () => {
    expect(includes(1, undefined)).toBe(false)
    expect(includes(1, null)).toBe(false)
    expect(includes(1, {})).toBe(false)
    expect(includes(1, 1)).toBe(false)
    expect(includes(1, 'foo')).toBe(false)
  })

  it('returns true if the value is in the array', () => {
    expect(includes(1, arr)).toBe(true)
    expect(includes(2, arr)).toBe(true)
    expect(includes(4, arr)).toBe(false)
  })
})

describe('sort', () => {
  const unsortedArr = [3, 2, 1]

  it('returns an empty array if array is a bad value', () => {
    expect(sort(undefined)).toEqual([])
    expect(sort(null)).toEqual([])
    expect(sort('foo')).toEqual([])
    expect(sort({})).toEqual([])
    expect(sort(1)).toEqual([])
    expect(sort()).toEqual([])
  })

  it('returns an empty array when called with an empty array', () => {
    expect(sort([])).toEqual([])
  })

  it('immutably sorts the provided array', () => {
    expect(sort(unsortedArr)).toEqual([1, 2, 3])
    expect(unsortedArr).toEqual([3, 2, 1])
  })
})

describe('sortBy', () => {
  it('returns an empty array if array is a bad value', () => {
    expect(sortBy(1, undefined)).toEqual([])
    expect(sortBy(1, null)).toEqual([])
    expect(sortBy(1, 'foo')).toEqual([])
    expect(sortBy(1, {})).toEqual([])
    expect(sortBy(1, 1)).toEqual([])
    expect(sortBy()).toEqual([])
  })

  it('returns the same array if sortBy key is not valid for the array', () => {
    expect(sortBy(undefined, arr)).toEqual(arr)
    expect(sortBy(null, arr)).toEqual(arr)
    expect(sortBy(1, arr)).toEqual(arr)
    expect(sortBy('foo', arr)).toEqual(arr)
    expect(sortBy({}, arr)).toEqual(arr)
    expect(sortBy([], arr)).toEqual(arr)
  })

  it('immutably sorts the array', () => {
    expect(sortBy('age', users)).toEqual([
      { user: 'pebbles', age: 1, active: true },
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
    ])
    expect(sortBy('user', users)).toEqual([
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true },
    ])

    expect(users).toEqual([
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true },
    ])
  })

  it('immutably sorts the array if provided a custom function comparator', () => {
    const comparator = (first, second) => {
      if (first.age < second.age) return -1
      if (first.age === second.age) return 0
      if (first.age > second.age) return 1
    }

    expect(sortBy(comparator, users)).toEqual([
      { user: 'pebbles', age: 1, active: true },
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
    ])

    expect(users).toEqual([
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true },
    ])
  })
})

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

    expect(zip(arr, arr2)).toEqual([[1, 4], [2, 5], [3, 6]])
  })

  it('zips two arrays with differing elements', () => {
    const arr2 = [4, 5, 6, 7]

    expect(zip(arr, arr2)).toEqual([[1, 4], [2, 5], [3, 6], [undefined, 7]])
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

describe.only('pairsEq', () => {
  /* it('returns true in an array if given identical falsey inputs', () => {
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
  }) */

  it('returns true if given empty arrays', () => {
    expect(pairsEq([], [])).toEqual([true])
  })

  it('returns false if given empty objects', () => {
    expect(pairsEq({}, {})).toEqual([false])
  })

  /* it('returns true if given identical non-paired inputs', () => {
    expect(pairsEq('foo', 'foo')).toEqual([true])
    expect(pairsEq(1, 1)).toEqual([true])
  }) */
})
