import { sort } from '../../src/array/sort'

const unsortedArr = [3, 2, 1]

describe('sort', () => {
  it('immutably sorts the provided array', () => {
    expect(sort(unsortedArr)).toEqual([1, 2, 3])
    expect(unsortedArr).toEqual([3, 2, 1])
  })

  it('returns an empty array when called with an empty array', () => {
    expect(sort([])).toEqual([])
  })
})
