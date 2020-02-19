import { slice } from '../../src/array/slice'

const arr = [1, 2, 3]

describe('slice', () => {
  it('returns an empty array if provided an empty array', () => {
    expect(slice(0, 1, [])).toEqual([])
  })

  it('immutably returns a new array of the specified slice section', () => {
    expect(slice(0, 2, arr)).toEqual([1, 2])

    expect(arr).toEqual([1, 2, 3])
  })

  it('returns an empty array if provided value is not an array', () => {
    expect(slice(0, 1, undefined)).toEqual([])
    expect(slice(0, 1, null)).toEqual([])
  })
})
