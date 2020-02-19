import { uniq } from '../../src/array/uniq'

const arr = [1, 2, 3]
const duplicatedArr = [...arr, ...arr, ...arr]

describe('uniq', () => {
  it('returns a new array with duplicated values removed', () => {
    expect(uniq(duplicatedArr)).toEqual(arr)
  })
})
