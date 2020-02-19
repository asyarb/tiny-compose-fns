import { reverse } from '../../src/array/reverse'

const arr = [1, 2, 3]

describe('reverse', () => {
  it('returns the same value if not provided an array', () => {
    expect(reverse(undefined)).toBeUndefined()
    expect(reverse(null)).toBeNull()
  })

  it('immutably reverses an array', () => {
    expect(reverse([])).toEqual([])
    expect(reverse(arr)).toEqual([3, 2, 1])

    expect(arr).toEqual([1, 2, 3])
  })
})
