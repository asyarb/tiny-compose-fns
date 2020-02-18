import { isPlainObject } from '../../src/utils/isPlainObject'

describe('isPlainObject', () => {
  it('returns true when passed a plain object', () => {
    expect(isPlainObject({})).toBe(true)
  })

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
})
