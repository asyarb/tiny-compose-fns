import { upperFirst } from '../../src/string/upperFirst'

describe('upperFirst', () => {
  it('uppercases the first letter in the provided string', () => {
    expect(upperFirst('foo')).toBe('Foo')
  })

  it('returns an empty string on undefined or null', () => {
    expect(upperFirst(null)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(upperFirst('')).toBe('')
  })
})
