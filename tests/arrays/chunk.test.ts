import { chunk } from '../../src/array/chunk'

const arr = [1, 2, 3]

describe('chunk', () => {
  it('returns an array of chunked arrays based on the given size', () => {
    expect(chunk(1, arr)).toEqual([[1], [2], [3]])
    expect(chunk(2, arr)).toEqual([[1, 2], [3]])
    expect(chunk(3, arr)).toEqual([[1, 2, 3]])
    expect(chunk(4, arr)).toEqual([[1, 2, 3]])
  })

  it('returns an empty array if given undefined or null', () => {
    expect(chunk(null, null)).toEqual([])
    expect(chunk(undefined, undefined)).toEqual([])
  })
})
