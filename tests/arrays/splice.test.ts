import { splice } from '../../src/array/splice'

const arr = [1, 2, 3]

describe('splice', () => {
  it('immutably splices arrays', () => {
    splice(1, 0, 4, arr)

    expect(arr).toEqual([1, 2, 3])
  })

  it('splices to the specified start index', () => {
    expect(splice(1, 0, 4, arr)).toEqual([1, 4, 2, 3])
    expect(splice(2, 0, 4, arr)).toEqual([1, 2, 4, 3])
  })

  it('splices the array and replaces values based on the deleteCount parameter', () => {
    expect(splice(1, 1, 4, arr)).toEqual([1, 4, 3])
    expect(splice(1, 2, 4, arr)).toEqual([1, 4])
  })
})
