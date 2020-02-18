import { isFunction } from '../../src/utils/isFunction'

describe('isFunction', () => {
  it('returns true when passed a function', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(async () => {})).toBe(true)
  })

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
})
