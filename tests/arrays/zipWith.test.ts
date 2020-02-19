import { zipWith } from '../../src/array/zipWith'

const arr = [1, 2, 3]

describe('zipWith', () => {
  it('returns an empty array if iteratee is not a function.', () => {
    expect(zipWith(null, arr, arr)).toEqual([])
  })

  it('zips falsey inputs based on the provided iteratee', () => {
    //@ts-ignore
    expect(zipWith(() => {})).toEqual([undefined])
    expect(zipWith((a, b) => [a, b], null, null)).toEqual([[null, null]])
  })

  it('zips inputs based on the provided iteratee', () => {
    expect(zipWith((a, b) => a + b, arr, arr)).toEqual([2, 4, 6])
    expect(zipWith((a, b) => a === b, arr, arr)).toEqual([true, true, true])
  })

  it('zips inputs with differing lengths to the max value', () => {
    const arr2 = [1, 2, 3, 4]

    expect(zipWith((a, b) => a === b, arr, arr2)).toEqual([
      true,
      true,
      true,
      false,
    ])
  })
})
