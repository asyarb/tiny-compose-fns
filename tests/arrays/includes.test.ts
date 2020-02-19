import { includes } from '../../src/array/includes'

const arr = [1, 2, 3]

describe('includes', () => {
  it('returns true if the value is in the array', () => {
    expect(includes(1, arr)).toBe(true)
    expect(includes(2, arr)).toBe(true)
    expect(includes(4, arr)).toBe(false)
  })

  it('returns false if array is a bad value', () => {
    expect(includes(1, undefined)).toBe(false)
    expect(includes(1, null)).toBe(false)
  })
})
