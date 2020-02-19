import { reduce } from '../../src/array/reduce'

describe('reduce', () => {
  it('reduces a value based on the provided iteratee', () => {
    expect(reduce((sum, n) => sum + n, 0, [1, 2])).toBe(3)
  })
})
