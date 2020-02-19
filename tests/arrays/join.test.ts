import { join } from '../../src/array/join'

const arr = [1, 2, 3]

describe('join', () => {
  it('returns a string by joining array values by separator', () => {
    expect(join('-', arr)).toBe('1-2-3')
    expect(join('foo', arr)).toBe('1foo2foo3')
  })

  it('returns an empty string on invalid inputs', () => {
    expect(join(undefined, undefined)).toBe('')
    expect(join(undefined, null)).toBe('')
    expect(join(undefined, [])).toBe('')

    expect(join(null, undefined)).toBe('')
    expect(join(null, null)).toBe('')
    expect(join(null, [])).toBe('')
  })
})
