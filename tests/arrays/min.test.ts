import { min } from '../../src/array/min'

const arr = [1, 2, 3]

describe('min', () => {
  it('returns the minimum value of an array', () => {
    expect(min(arr)).toBe(1)
  })

  it('returns undefined if array is empty', () => {
    expect(min([])).toBeUndefined()
  })
})
