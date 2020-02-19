import { uniq } from '../../src/array/uniq'

const arr = [1, 2, 3]
const duplicatedArr = [...arr, ...arr, ...arr]

describe('uniq', () => {
  it('returns an empty array if given a bad parameter', () => {
    expect(uniq(undefined)).toEqual([])
    expect(uniq(null)).toEqual([])
  })

  it('returns a new array with duplicated values removed', () => {
    expect(uniq(duplicatedArr)).toEqual(arr)
  })
})
