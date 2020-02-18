import { isArray } from '../../src/utils/isArray'

describe('isArray', () => {
  it('returns true when passed an array', () => {
    expect(isArray([])).toBe(true)
  })

  it('returns false when passed undefined', () => {
    expect(isArray(undefined)).toBe(false)
  })

  it('returns false when passed null', () => {
    expect(isArray(null)).toBe(false)
  })

  it('returns false when passed a string', () => {
    expect(isArray('')).toBe(false)
    expect(isArray('foo')).toBe(false)
  })

  it('returns false when passed a function', () => {
    expect(isArray(() => {})).toBe(false)
    expect(isArray(async () => {})).toBe(false)
  })

  it('returns false when passed a Number', () => {
    expect(isArray(1)).toBe(false)
    expect(isArray(123.456)).toBe(false)
  })

  it('returns false when passed objects', () => {
    expect(isArray({})).toBe(false)
    expect(isArray(new Set())).toBe(false)
    expect(isArray(new Map())).toBe(false)
  })
})
