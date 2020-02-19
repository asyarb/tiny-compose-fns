import { filter } from '../../src/array/filter'

const arr = [1, 2, 3]

describe('filter', () => {
  it('immutably filters an array and returns a new array', () => {
    const res = filter(x => x === 1, arr)

    expect(res).toEqual([1])
    expect(arr).toEqual([1, 2, 3])
  })
})
