import { camelCase } from '../../src/string/camelCase'

describe('camelCase', () => {
  it('camelCases a string', () => {
    expect(camelCase('FOO BAR')).toBe('fooBar')
  })

  it('returns an empty string if given an empty string', () => {
    expect(camelCase('')).toBe('')
  })
})
