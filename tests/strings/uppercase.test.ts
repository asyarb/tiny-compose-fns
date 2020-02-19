import { uppercase } from '../../src/string/uppercase'

describe('uppercase', () => {
  it('uppercases a string', () => {
    expect(uppercase('foo')).toBe('FOO')
  })

  it('returns an empty string on undefined or null', () => {
    expect(uppercase(null)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(uppercase('')).toBe('')
  })
})
