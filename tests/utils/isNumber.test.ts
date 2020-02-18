import { isNumber } from '../../src/utils/isNumber'

describe('isNumber', () => {
  it('returns true when passed a Number', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber(123.456)).toBe(true)
  })

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
})
