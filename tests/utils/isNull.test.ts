import { isNull } from '../../src/utils/isNull'

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
