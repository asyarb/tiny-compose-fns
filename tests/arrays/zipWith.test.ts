import { zipWith } from '../../src/array/zipWith'

const arr = [1, 2, 3]

describe('zipWith', () => {
  it('zips inputs with differing lengths to the max value', () => {
    const arr2 = [1, 2, 3, 4]

    expect(zipWith((a, b) => a === b, arr, arr2)).toEqual([
      true,
      true,
      true,
      false,
    ])
  })

  it('zips inputs based on the provided iteratee', () => {
    expect(zipWith((a, b) => a + b, arr, arr)).toEqual([2, 4, 6])
    expect(zipWith((a, b) => a === b, arr, arr)).toEqual([true, true, true])
  })
})
