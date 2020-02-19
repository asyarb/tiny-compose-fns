import { last } from '../../src/array/last'

const arr = [1, 2, 3]

describe('last', () => {
  it('returns the last element from an array', () => {
    expect(last(arr)).toBe(3)
  })

  it('returns undefined if given an empty array', () => {
    expect(last([])).toBeUndefined()
    expect(last(undefined)).toBeUndefined()
    expect(last(null)).toBeUndefined()
  })
})
