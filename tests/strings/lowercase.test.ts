import { lowercase } from '../../src/string/lowercase'

describe('lowercase', () => {
  it('lowercases a string', () => {
    expect(lowercase('FOO')).toBe('foo')
  })

  it('returns an empty string on undefined or null', () => {
    expect(lowercase(null)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(lowercase('')).toBe('')
  })
})
