import { trim } from '../../src/string/trim'

describe('trim', () => {
  it('trims a string', () => {
    expect(trim('  foo bar   ')).toBe('foo bar')
    expect(trim('foo bar   ')).toBe('foo bar')
    expect(trim('   foo bar')).toBe('foo bar')
  })

  it('returns an empty string if given an empty string', () => {
    expect(trim('')).toBe('')
  })
})
