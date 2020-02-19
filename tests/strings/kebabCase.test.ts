import { kebabCase } from '../../src/string/kebabCase'

describe('kebabCase', () => {
  it('kebabCases a string', () => {
    expect(kebabCase('FOO BAR')).toBe('foo-bar')
  })

  it('returns an empty string on undefined or null', () => {
    expect(kebabCase(null)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(kebabCase('')).toBe('')
  })
})
