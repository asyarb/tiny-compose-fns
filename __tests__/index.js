import { noop, isEmpty } from '../src'

describe('noop', () => {
  it('should return undefined', () => {
    expect(noop()).toBeUndefined()
    expect(noop('TEST')).toBeUndefined()
    expect(noop([1, 2, 3])).toBeUndefined()
  })
})

// ARRAY FUNCTIONS

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
