import { isUndefined } from '../../src/utils/isUndefined'

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
    expect(isUndefined(1)).toBe(false)
    expect(isUndefined(123.456)).toBe(false)

    expect(isUndefined('')).toBe(false)
    expect(isUndefined('foo')).toBe(false)

    expect(isUndefined([])).toBe(false)
    expect(isUndefined({})).toBe(false)

    expect(isUndefined(new Set())).toBe(false)
    expect(isUndefined(new Map())).toBe(false)
  })
})
