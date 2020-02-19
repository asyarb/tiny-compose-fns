import { map } from '../../src/array/map'
import { noop } from '../../src/utils/noop'

const arr = [1, 2, 3]

describe('map', () => {
  it('immutably maps over an array and returns a new array', () => {
    const res = map(x => x + 1, arr)

    expect(res).toEqual([2, 3, 4])
    expect(arr).toEqual([1, 2, 3])
  })

  it('returns an empty array with invalid inputs', () => {
    expect(map(noop, undefined)).toEqual([])
    expect(map(noop, null)).toEqual([])
  })
})
