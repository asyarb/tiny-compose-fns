import { max } from '../../src/array/max'

const arr = [1, 2, 3]

describe('max', () => {
  it('returns the maximum value of an array', () => {
    expect(max(arr)).toBe(3)
  })

  it('returns undefined if array is empty', () => {
    expect(max([])).toBeUndefined()
  })

  it('returns undefined if array is falsey', () => {
    expect(max(null)).toBeUndefined()
    expect(max(undefined)).toBeUndefined()
  })
})
