import {
  noop,
  isEmpty,
  isNull,
  isUndefined,
  isString,
  isNumber,
  isPlainObject,
  isFunction,
  times,
  uniqueId,
  size,
} from '../noFp'

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

describe('times', () => {
  it('returns an empty array if provided undefined values', () => {
    expect(times()).toEqual([])
    expect(times(null)).toEqual([])
    expect(times(null, null)).toEqual([])
  })

  it('returns an empty array if the provided number is 0', () => {
    expect(times(noop, 0)).toEqual([])
  })

  it('returns an array containing the invoked function the passed number of times', () => {
    expect(times(noop, 4)).toEqual([undefined, undefined, undefined, undefined])
    expect(times(() => 1, 4)).toEqual([1, 1, 1, 1])
  })
})

describe('uniqueId', () => {
  it('returns a unique value on every call', () => {
    expect(uniqueId()).toBe('1')
    expect(uniqueId()).toBe('2')
    expect(uniqueId()).toBe('3')
  })

  it('returns a unique value on every call with the provided prefix', () => {
    expect(uniqueId('foo')).toBe('foo4')
    expect(uniqueId('foo')).toBe('foo5')
    expect(uniqueId('foo')).toBe('foo6')
  })
})

describe('size', () => {
  const arr = [1, 2, 3]
  const obj = { foo: 'bar', hello: 'world' }
  const set = new Set(arr)
  const map = new Map()
  map.set('foo', 'bar')
  map.set('hello', 'world')

  it('returns 0 if given undefined or null', () => {
    expect(size(undefined)).toBe(0)
    expect(size()).toBe(0)
    expect(size(null)).toBe(0)
  })

  it('returns 0 if given empty colletions', () => {
    expect(size('')).toBe(0)
    expect(size([])).toBe(0)
    expect(size({})).toBe(0)
    expect(size(new Set())).toBe(0)
    expect(size(new Map())).toBe(0)
  })

  it('returns the number of enumerable items in a collection', () => {
    expect(size(arr)).toBe(3)
    expect(size(obj)).toBe(2)
    expect(size('foo')).toBe(3)
    expect(size(set)).toBe(3)
    expect(size(map)).toBe(2)
  })
})
