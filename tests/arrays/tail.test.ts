import { tail } from '../../src/array/tail'

const arr = [1, 2, 3]

describe('tail', () => {
  it('returns the tail elements from an array', () => {
    expect(tail(arr)).toEqual([2, 3])
  })

  it('returns empty array if given an empty input', () => {
    expect(tail([])).toEqual([])
  })
})
