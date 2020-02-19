import { first } from '../../src/array/first'

const arr = [1, 2, 3]

describe('first', () => {
  it('returns the first element from an array', () => {
    expect(first(arr)).toBe(1)
  })

  it('returns undefined if given an empty array', () => {
    expect(first([])).toBeUndefined()
  })
})
