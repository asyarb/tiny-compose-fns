import { replace } from '../../src/string/replace'

describe('replace', () => {
  const str = 'The quick brown fox jumps over the lazy dog.'
  const regex = /dog/gi

  it('replaces the regex pattern with the specified replacement', () => {
    expect(replace(regex, 'foo', str)).toBe(
      'The quick brown fox jumps over the lazy foo.'
    )
    expect(replace(regex, null, str)).toBe(
      'The quick brown fox jumps over the lazy null.'
    )
    expect(replace(regex, undefined, str)).toBe(
      'The quick brown fox jumps over the lazy undefined.'
    )
  })

  it('returns empty string if str parameter is undefined or null', () => {
    expect(replace(null, null, null)).toBe('')
    expect(replace(regex, 'foo', null)).toBe('')
  })

  it('returns the same string if regex is undefined or null', () => {
    expect(replace(undefined, 'foo', str)).toBe(str)
    expect(replace(null, 'foo', str)).toBe(str)
  })
})
