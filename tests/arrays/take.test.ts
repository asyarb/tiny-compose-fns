import { take } from '../../src/array/take'

const arr = [1, 2, 3]

describe('take', () => {
  it('immutably returns the taken subarray from an array', () => {
    expect(take(2, arr)).toEqual([1, 2])
    expect(arr).toEqual([1, 2, 3])
  })

  it('returns empty array if given empty array', () => {
    expect(take(2, [])).toEqual([])
  })

  it('returns one item array if num param is undefined', () => {
    expect(take(undefined, arr)).toEqual([1])
  })
})
