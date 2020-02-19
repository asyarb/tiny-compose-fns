import { filter } from '../../src/array/filter'

const cb = () => false
const arr = [1, 2, 3]

describe('filter', () => {
  it('immutably filters an array and returns a new array', () => {
    const res = filter(x => x === 1, arr)

    expect(res).toEqual([1])
    expect(arr).toEqual([1, 2, 3])
  })

  it('throws error if provided a bad function', () => {
    expect(() => filter(undefined, undefined)).toThrow()
    expect(() => filter(undefined, null)).toThrow()
    expect(() => filter(undefined, [])).toThrow()

    expect(() => filter(null, undefined)).toThrow()
    expect(() => filter(null, null)).toThrow()
    expect(() => filter(null, [])).toThrow()
  })

  it('returns an empty array with invalid inputs', () => {
    expect(filter(cb, undefined)).toEqual([])
    expect(filter(cb, null)).toEqual([])
  })
})
