import { join } from '../../src/array/join'

const arr = [1, 2, 3]

describe('join', () => {
  it('returns a string by joining array values by separator', () => {
    expect(join('-', arr)).toBe('1-2-3')
    expect(join('foo', arr)).toBe('1foo2foo3')
  })
})
