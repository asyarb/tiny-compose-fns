import { shuffle } from '../../src/array/shuffle'

describe('shuffle', () => {
  it('immutably shuffles an array', () => {
    const bigArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(shuffle(bigArr)).not.toEqual([])
    expect(bigArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('returns an empty array if given an empty array', () => {
    expect(shuffle([])).toEqual([])
  })
})
