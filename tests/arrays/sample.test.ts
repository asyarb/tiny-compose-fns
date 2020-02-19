import { sample } from '../../src/array/sample'

const arr = [1, 2, 3]

describe('sample', () => {
  it('returns a random value from the array', () => {
    const randomNum = sample(arr) as number

    expect(arr.includes(randomNum)).toBe(true)
  })

  it('returns undefined if given an empty array', () => {
    expect(sample([])).toBeUndefined()
  })
})
