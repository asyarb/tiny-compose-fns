import { flat } from '../../src/array/flat'

const arr = [1, 2, 3]

describe('flat', () => {
  it('immutably flattens an array a single level', () => {
    const deepArr = [arr, arr, arr]

    expect(flat(deepArr)).toEqual([...arr, ...arr, ...arr])
    expect(deepArr).toEqual([arr, arr, arr])
  })

  it('removes holes in arrays', () => {
    const holeArr = [1, 2, , 3, 4]

    expect(flat(holeArr)).toEqual([1, 2, 3, 4])
  })

  it('returns an empty array if argument is bad', () => {
    expect(flat(undefined)).toEqual([])
    expect(flat(null)).toEqual([])
  })
})
