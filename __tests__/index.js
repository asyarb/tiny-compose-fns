import {
  noop,
  isEmpty,
  isNull,
  isUndefined,
  isString,
  isNumber,
  isPlainObject,
  isFunction,
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
} from '../src'

// UTILS

describe('Utils', () => {
  describe('noop', () => {
    it('should return undefined', () => {
      expect(noop()).toBeUndefined()
      expect(noop('TEST')).toBeUndefined()
      expect(noop([1, 2, 3])).toBeUndefined()
    })
  })

  describe('isEmpty', () => {
    it('returns true if passed undefined', () => {
      expect(isEmpty(undefined)).toBe(true)
    })

    it('returns true if passed null', () => {
      expect(isEmpty(null)).toBe(true)
    })

    it('returns true if passed an empty string', () => {
      expect(isEmpty('')).toBe(true)
    })

    it('returns true if passed an empty object', () => {
      expect(isEmpty({})).toBe(true)
    })

    it('returns true if passed an empty array', () => {
      expect(isEmpty([])).toBe(true)
    })

    it('returns true if passed an empty Set', () => {
      expect(isEmpty(new Set())).toBe(true)
    })

    it('returns true if passed an empty Map', () => {
      expect(isEmpty(new Map())).toBe(true)
    })

    it('returns false if passed an array with values', () => {
      expect(isEmpty([1, 2, 3])).toBe(false)
      expect(isEmpty([null])).toBe(false)
      expect(isEmpty([undefined])).toBe(false)
    })

    it('returns false if passed an object with values', () => {
      expect(
        isEmpty({
          foo: 'bar',
        })
      ).toBe(false)
    })

    it('returns false if passed a Set with values', () => {
      expect(isEmpty(new Set([1, 2, 3]))).toBe(false)
    })

    it('returns false if passed a Map with values', () => {
      const map = new Map()
      map.set('foo', 'bar')

      expect(isEmpty(map)).toBe(false)
    })

    it('returns false if passed a string', () => {
      expect(isEmpty('foo')).toBe(false)
    })

    it('returns false if passed a number', () => {
      expect(isEmpty(1)).toBe(false)
    })
  })

  describe('isNull', () => {
    it('returns true when passed null', () => {
      const foo = null

      expect(isNull(null)).toBe(true)
      expect(isNull(foo)).toBe(true)
    })

    it('returns false when passed undefined', () => {
      const foo = undefined

      expect(isNull(undefined)).toBe(false)
      expect(isNull(foo)).toBe(false)
    })

    it('returns false when passed a value', () => {
      expect(isNull(1)).toBe(false)
      expect(isNull(123.456)).toBe(false)
      expect(isNull('')).toBe(false)
      expect(isNull('foo')).toBe(false)
      expect(isNull([])).toBe(false)
      expect(isNull({})).toBe(false)
      expect(isNull(new Set())).toBe(false)
      expect(isNull(new Map())).toBe(false)
    })
  })

  describe('isUndefined', () => {
    it('returns true when passed undefined', () => {
      const foo = undefined

      expect(isUndefined(undefined)).toBe(true)
      expect(isUndefined(foo)).toBe(true)
    })

    it('returns false when passsed null', () => {
      const foo = null

      expect(isUndefined(null)).toBe(false)
      expect(isUndefined(foo)).toBe(false)
    })

    it('returns false when passed a value', () => {
      expect(isNull(1)).toBe(false)
      expect(isNull(123.456)).toBe(false)
      expect(isNull('')).toBe(false)
      expect(isNull('foo')).toBe(false)
      expect(isNull([])).toBe(false)
      expect(isNull({})).toBe(false)
      expect(isNull(new Set())).toBe(false)
      expect(isNull(new Map())).toBe(false)
    })
  })

  describe('isString', () => {
    it('returns false when passed undefined', () => {
      expect(isString(undefined)).toBe(false)
    })

    it('returns false when passed null', () => {
      expect(isString(null)).toBe(false)
    })

    it('returns false when passed a number', () => {
      expect(isString(1)).toBe(false)
      expect(isString(123.456)).toBe(false)
    })

    it('returns false when passed an object', () => {
      expect(isString({})).toBe(false)
      expect(isString([])).toBe(false)
      expect(isString(new Set())).toBe(false)
      expect(isString(new Map())).toBe(false)
    })

    it('returns false when passed a function', () => {
      expect(isString(() => {})).toBe(false)
      expect(isString(async () => {})).toBe(false)
    })

    it('returns true when passed a string', () => {
      expect(isString('')).toBe(true)
      expect(isString('foo')).toBe(true)
    })
  })

  describe('isNumber', () => {
    it('returns false when passed undefined', () => {
      expect(isNumber(undefined)).toBe(false)
    })

    it('returns false when passed null', () => {
      expect(isNumber(null)).toBe(false)
    })

    it('returns false when passed a string', () => {
      expect(isNumber('')).toBe(false)
      expect(isNumber('foo')).toBe(false)
    })

    it('returns false when passed an object', () => {
      expect(isNumber({})).toBe(false)
      expect(isNumber([])).toBe(false)
      expect(isNumber(new Set())).toBe(false)
      expect(isNumber(new Map())).toBe(false)
    })

    it('returns false when passed a function', () => {
      expect(isNumber(() => {})).toBe(false)
      expect(isNumber(async () => {})).toBe(false)
    })

    it('returns true when passed a Number', () => {
      expect(isNumber(1)).toBe(true)
      expect(isNumber(123.456)).toBe(true)
    })
  })

  describe('isPlainObject', () => {
    it('returns false when passed undefined', () => {
      expect(isPlainObject(undefined)).toBe(false)
    })

    it('returns false when passed null', () => {
      expect(isPlainObject(null)).toBe(false)
    })

    it('returns false when passed a string', () => {
      expect(isPlainObject('')).toBe(false)
      expect(isPlainObject('foo')).toBe(false)
    })

    it('returns false when passed a function', () => {
      expect(isPlainObject(() => {})).toBe(false)
      expect(isPlainObject(async () => {})).toBe(false)
    })

    it('returns false when passed a Number', () => {
      expect(isPlainObject(1)).toBe(false)
      expect(isPlainObject(123.456)).toBe(false)
    })

    it('returns false when passed **not** plain objects', () => {
      expect(isPlainObject([])).toBe(false)
      expect(isPlainObject(new Set())).toBe(false)
      expect(isPlainObject(new Map())).toBe(false)
    })

    it('returns true when passed a plain object', () => {
      expect(isPlainObject({})).toBe(true)
    })
  })

  describe('isFunction', () => {
    it('returns false when passed undefined', () => {
      expect(isFunction(undefined)).toBe(false)
    })

    it('returns false when passed null', () => {
      expect(isFunction(null)).toBe(false)
    })

    it('returns false when passed a string', () => {
      expect(isFunction('')).toBe(false)
      expect(isFunction('foo')).toBe(false)
    })

    it('returns false when passed an object', () => {
      expect(isFunction({})).toBe(false)
      expect(isFunction([])).toBe(false)
      expect(isFunction(new Set())).toBe(false)
      expect(isFunction(new Map())).toBe(false)
    })

    it('returns false when passed a Number', () => {
      expect(isFunction(1)).toBe(false)
      expect(isFunction(123.456)).toBe(false)
    })

    it('returns true when passed a function', () => {
      expect(isFunction(() => {})).toBe(true)
      expect(isFunction(async () => {})).toBe(true)
    })
  })
})

describe('Arrays & Objects', () => {
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
      expect(map(noop, undefined)).toMatchObject([])
      expect(map(noop, null)).toMatchObject([])
      expect(map(noop, 1)).toMatchObject([])
      expect(map(noop, 'foo')).toMatchObject([])
    })

    it('immutably maps over an array and returns a new array', () => {
      const res = map(x => x + 1, arr)

      expect(res).toMatchObject([2, 3, 4])
      expect(arr).toMatchObject([1, 2, 3])
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
      expect(filter(noop, undefined)).toMatchObject([])
      expect(filter(noop, null)).toMatchObject([])
      expect(filter(noop, 1)).toMatchObject([])
      expect(filter(noop, 'foo')).toMatchObject([])
    })

    it('immutably filters an array and returns a new array', () => {
      const res = filter(x => x === 1, arr)

      expect(res).toMatchObject([1])
      expect(arr).toMatchObject([1, 2, 3])
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
      expect(tail(undefined)).toMatchObject([])
      expect(tail(null)).toMatchObject([])
      expect(tail(1)).toMatchObject([])
      expect(tail('foo')).toMatchObject([])
      expect(tail({})).toMatchObject([])
      expect(tail([])).toMatchObject([])
    })

    it('returns the tail elements from an array', () => {
      expect(tail(arr)).toMatchObject([2, 3])
    })
  })

  describe('take', () => {
    it('returns empty array if both params are undefined or null', () => {
      expect(take(undefined, undefined)).toMatchObject([])
      expect(take(undefined, null)).toMatchObject([])
      expect(take(null, undefined)).toMatchObject([])
      expect(take(null, null)).toMatchObject([])
    })

    it('returns one item array if num param is undefined', () => {
      expect(take(undefined, arr)).toMatchObject([1])
      expect(take(null, arr)).toMatchObject([1])
    })

    it('returns empty array if num param is bad', () => {
      expect(take('', arr)).toMatchObject([])
      expect(take([], arr)).toMatchObject([])
      expect(take({}, arr)).toMatchObject([])
    })

    it('returns empty array if arr param is bad', () => {
      expect(take(1, {})).toMatchObject([])
      expect(take(2, 1)).toMatchObject([])
      expect(take(2, 'foo')).toMatchObject([])
    })

    it('returns empty array if given empty array', () => {
      expect(take(2, [])).toMatchObject([])
    })

    it('immutably returns the taken subarray from an array', () => {
      expect(take(2, arr)).toMatchObject([1, 2])
      expect(arr).toMatchObject([1, 2, 3])
    })
  })

  describe('compact', () => {
    const falseyArr = [false, 0, '', undefined, NaN, 1, 2, 3]

    it('returns an empty array given undefined or null', () => {
      expect(compact(undefined)).toMatchObject([])
      expect(compact(null)).toMatchObject([])
    })

    it('returns an empty array if given bad values', () => {
      expect(compact('foo')).toMatchObject([])
      expect(compact(1)).toMatchObject([])
      expect(compact({})).toMatchObject([])
    })

    it('immutably returns a new compacted array', () => {
      expect(compact(falseyArr)).toMatchObject([1, 2, 3])
      expect(falseyArr).toMatchObject([false, 0, '', undefined, NaN, 1, 2, 3])
    })
  })

  describe('concat', () => {
    it('returns an array of one undefined if given undefined', () => {
      expect(concat(undefined)).toMatchObject([undefined])
      expect(concat(undefined, undefined)).toMatchObject([undefined])
    })

    it('returns an array of with one null if given null', () => {
      expect(concat(null)).toMatchObject([null])
      expect(concat(null, null)).toMatchObject([null])
    })

    it('immutably concatenates array values', () => {
      expect(concat(arr, 4)).toMatchObject([1, 2, 3, 4])
      expect(concat(arr, 'foo')).toMatchObject([1, 2, 3, 'foo'])
      expect(concat(arr, [])).toMatchObject([1, 2, 3])
      expect(concat(arr, {})).toMatchObject([1, 2, 3, {}])
      expect(concat(arr, null)).toMatchObject([1, 2, 3, null])
      expect(concat(arr, undefined)).toMatchObject([1, 2, 3, undefined])
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
    })

    it('returns undefined if searched value is not in the collection', () => {
      expect(find(item => item === 4, arr)).toBeUndefined()
      expect(find(item => item.user === 'bob', users)).toBeUndefined()
    })

    it('returns the searched value', () => {
      expect(find(item => item === 2, arr)).toBe(2)
      expect(find(item => item === 3, arr)).toBe(3)
      expect(find(item => item.user === 'fred', users)).toMatchObject(users[1])
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
      expect(flat(undefined)).toMatchObject([])
      expect(flat(null)).toMatchObject([])
      expect(flat({})).toMatchObject([])
      expect(flat(1)).toMatchObject([])
      expect(flat('foo')).toMatchObject([])
    })

    it('removes holes in arrays', () => {
      const holeArr = [1, 2, , 3, 4]

      expect(flat(holeArr)).toMatchObject([1, 2, 3, 4])
    })

    it('immutably flattens an array a single level', () => {
      expect(flat(deepArr)).toMatchObject([...arr, ...arr, ...arr])
      expect(deepArr).toMatchObject([arr, arr, arr])
    })
  })

  describe('flatDepth', () => {
    const deepArr = [[[arr]], [arr], arr]

    it('flattens a single level if num is undefined', () => {
      expect(flatDepth(undefined, deepArr)).toMatchObject([[arr], arr, ...arr])
    })

    it('returns the provided array if num is not a number, but not undefined', () => {
      expect(flatDepth(null, deepArr)).toMatchObject(deepArr)
      expect(flatDepth('foo', deepArr)).toMatchObject(deepArr)
      expect(flatDepth({}, deepArr)).toMatchObject(deepArr)
      expect(flatDepth([], deepArr)).toMatchObject(deepArr)
    })

    it('returns an empty array if argument is bad', () => {
      expect(flatDepth(1, undefined)).toMatchObject([])
      expect(flatDepth(2, null)).toMatchObject([])
      expect(flatDepth(3, {})).toMatchObject([])
      expect(flatDepth(4, 1)).toMatchObject([])
      expect(flatDepth(5, 'foo')).toMatchObject([])
    })

    it('removes holes in arrays', () => {
      const holeArr = [1, 2, , 3, 4]

      expect(flatDepth(1, holeArr)).toMatchObject([1, 2, 3, 4])
    })

    it('immutably flattens an array a with the specified depth level', () => {
      expect(flatDepth(1, deepArr)).toMatchObject([[arr], arr, ...arr])
      expect(flatDepth(2, deepArr)).toMatchObject([arr, ...arr, ...arr])
      expect(deepArr).toMatchObject([[[arr]], [arr], arr])
    })
  })

  describe('flatDeep', () => {
    const deepArr = [[[arr]], [arr], arr]

    it('returns an empty array if argument is bad', () => {
      expect(flatDeep(undefined)).toMatchObject([])
      expect(flatDeep(null)).toMatchObject([])
      expect(flatDeep({})).toMatchObject([])
      expect(flatDeep(1)).toMatchObject([])
      expect(flatDeep('foo')).toMatchObject([])
    })

    it('removes holes in arrays', () => {
      const holeArr = [1, 2, , 3, 4]

      expect(flatDeep(holeArr)).toMatchObject([1, 2, 3, 4])
    })

    it('immutably flattens an array deeply', () => {
      expect(flatDeep(deepArr)).toMatchObject([...arr, ...arr, ...arr])

      expect(deepArr).toMatchObject([[[arr]], [arr], arr])
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
      expect(flatMap(noop, undefined)).toMatchObject([])
      expect(flatMap(noop, null)).toMatchObject([])
      expect(flatMap(noop, {})).toMatchObject([])
      expect(flatMap(noop, 1)).toMatchObject([])
      expect(flatMap(noop, 'foo')).toMatchObject([])
    })

    it('removes holes in arrays', () => {
      const holeArr = [1, 2, , 3, 4]

      expect(flatMap(() => 1, holeArr)).toMatchObject([1, 1, 1, 1])
    })

    it('immutably maps and then flattens over an array ', () => {
      expect(flatMap(i => i, deepArr)).toMatchObject([...arr, ...arr, ...arr])
      expect(flatMap(() => 1, deepArr)).toMatchObject([1, 1, 1])

      expect(deepArr).toMatchObject([arr, arr, arr])
    })
  })

  describe('reverse', () => {
    it('returns the same value if not provided an array', () => {
      expect(reverse(undefined)).toBeUndefined()
      expect(reverse(null)).toBe(null)
      expect(reverse(1)).toBe(1)
      expect(reverse('foo')).toBe('foo')
      expect(reverse({})).toMatchObject({})
      expect(reverse(noop)).toBe(noop)
    })

    it('immutably reverses an array', () => {
      expect(reverse([])).toMatchObject([])
      expect(reverse(arr)).toMatchObject([3, 2, 1])

      expect(arr).toMatchObject([1, 2, 3])
    })
  })

  describe('slice', () => {
    it('returns an empty array if provided value is not an array', () => {
      expect(slice(0, 1, undefined)).toMatchObject([])
      expect(slice(0, 1, null)).toMatchObject([])
      expect(slice(0, 1, 'foo')).toMatchObject([])
      expect(slice(0, 1, {})).toMatchObject([])
    })

    it('returns an empty array if provided an empty array', () => {
      expect(slice(0, 1, [])).toMatchObject([])
    })

    it('immutably returns a new array of the specified slice section', () => {
      expect(slice(0, 2, arr)).toMatchObject([1, 2])

      expect(arr).toMatchObject([1, 2, 3])
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
      expect(sort(undefined)).toMatchObject([])
      expect(sort(null)).toMatchObject([])
      expect(sort('foo')).toMatchObject([])
      expect(sort({})).toMatchObject([])
      expect(sort(1)).toMatchObject([])
      expect(sort()).toMatchObject([])
    })

    it('returns an empty array when called with an empty array', () => {
      expect(sort([])).toMatchObject([])
    })

    it('immutably sorts the provided array', () => {
      expect(sort(unsortedArr)).toMatchObject([1, 2, 3])
      expect(unsortedArr).toMatchObject([3, 2, 1])
    })
  })

  describe('sortBy', () => {
    it('returns an empty array if array is a bad value', () => {
      expect(sortBy(1, undefined)).toMatchObject([])
      expect(sortBy(1, null)).toMatchObject([])
      expect(sortBy(1, 'foo')).toMatchObject([])
      expect(sortBy(1, {})).toMatchObject([])
      expect(sortBy(1, 1)).toMatchObject([])
      expect(sortBy()).toMatchObject([])
    })

    it('returns the same array if sortBy key is not valid for the array', () => {
      expect(sortBy(undefined, arr)).toMatchObject(arr)
      expect(sortBy(null, arr)).toMatchObject(arr)
      expect(sortBy(1, arr)).toMatchObject(arr)
      expect(sortBy('foo', arr)).toMatchObject(arr)
      expect(sortBy({}, arr)).toMatchObject(arr)
      expect(sortBy([], arr)).toMatchObject(arr)
    })

    it('immutably sorts the array', () => {
      expect(sortBy('age', users)).toMatchObject([
        { user: 'pebbles', age: 1, active: true },
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
      ])
      expect(sortBy('user', users)).toMatchObject([
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true },
      ])

      expect(users).toMatchObject([
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

      expect(sortBy(comparator, users)).toMatchObject([
        { user: 'pebbles', age: 1, active: true },
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
      ])

      expect(users).toMatchObject([
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true },
      ])
    })
  })

  describe('uniq', () => {
    const duplicatedArr = [...arr, ...arr, ...arr]

    it('returns an empty array if given a bad parameter', () => {
      expect(uniq(undefined)).toMatchObject([])
      expect(uniq(null)).toMatchObject([])
      expect(uniq(1)).toMatchObject([])
      expect(uniq('foo')).toMatchObject([])
      expect(uniq({})).toMatchObject([])
      expect(uniq(noop)).toMatchObject([])
    })

    it('returns a new array with duplicated values removed', () => {
      expect(uniq(duplicatedArr)).toMatchObject(arr)
    })
  })
})
