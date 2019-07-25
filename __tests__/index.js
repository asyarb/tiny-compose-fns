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

describe('Arrays', () => {
  const arr = [1, 2, 3]

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
})
