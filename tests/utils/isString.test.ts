import { isString } from '../../src/utils/isString'

describe('isString', () => {
  it('returns true when passed a string', () => {
    expect(isString('')).toBe(true)
    expect(isString('foo')).toBe(true)
  })

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
})
