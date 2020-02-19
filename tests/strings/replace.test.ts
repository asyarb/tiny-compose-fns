import { replace } from '../../src/string/replace'

const str = 'The quick brown fox jumps over the lazy dog.'
const regex = /dog/gi

describe('replace', () => {
  it('replaces the regex pattern with the specified replacement', () => {
    expect(replace(regex, 'foo', str)).toBe(
      'The quick brown fox jumps over the lazy foo.'
    )
  })
})
