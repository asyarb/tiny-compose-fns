import { concat } from '../../src/array/concat'

const arr = [1, 2, 3]

describe('concat', () => {
  it('immutably concatenates array values', () => {
    expect(concat(arr, 4)).toEqual([1, 2, 3, 4])
    expect(concat(arr, 'foo')).toEqual([1, 2, 3, 'foo'])
    expect(concat(arr, [])).toEqual([1, 2, 3])
    expect(concat(arr, {})).toEqual([1, 2, 3, {}])
    expect(concat(arr, null)).toEqual([1, 2, 3, null])
    expect(concat(arr, undefined)).toEqual([1, 2, 3, undefined])
  })

  it('returns an array of one undefined if given bad inputs', () => {
    expect(concat(undefined, undefined)).toEqual([undefined])
  })

  it('returns an array of with one null if given null', () => {
    expect(concat(null, null)).toEqual([null])
  })
})